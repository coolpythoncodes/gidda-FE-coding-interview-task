'use client';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useStoreContext } from '@/app/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast.hook';
import GiddaaApi from '@/lib/api/api.routes';
import { type LoginFormData } from '@/types/api.routes.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { object, string, type InferType } from 'yup';

const loginSchema = object({
    email: string().email().required('Email is required'),
    password: string().required('Password is required'),
}).required();

type FormData = InferType<typeof loginSchema>;

const LoginForm = () => {
    const router = useRouter();
    const { toast } = useToast();
    const { setStore } = useStoreContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(loginSchema),
    });

    const loginMutation = useMutation({
        mutationFn: (data: LoginFormData) => GiddaaApi.login(data),
        onSuccess: (data) => {
            // @ts-expect-error unknown error
            setStore({
                isLoggedIn: true,
                access_token: data?.data?.value?.value?.token,
            });
            toast({
                title: 'Login successful',
                description: 'You have successfully logged in',
            });
            router.push('/dashboard');
        },
        onError: () => {
            toast({
                title: 'Login failed',
                description: 'Invalid email or password',
                variant: 'destructive',
            });
        },
    });

    const onSubmit = (data: FormData) => {
        loginMutation.mutate(data);
    };

    return (
        <form
            className="w-[440px] rounded-xl bg-white px-10 py-8 shadow-sm"
            onSubmit={handleSubmit(onSubmit) as VoidFunction}
        >
            <div className="mb-6 flex flex-col gap-y-5">
                <div>
                    <Input
                        placeholder="Enter your email"
                        // errors={errors.email}
                        {...register('email')}
                    />
                    <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
                </div>

                <div>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        {...register('password')}
                    />
                    <p className="mt-1 text-sm text-red-600">
                        {errors.password?.message}
                    </p>
                </div>
            </div>
            <Button disabled={loginMutation.isPending} className="w-full">
                {loginMutation.isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Please wait
            </Button>
        </form>
    );
};

export default LoginForm;
