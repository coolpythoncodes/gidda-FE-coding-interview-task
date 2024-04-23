'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast.hook';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string, type InferType } from 'yup';

const loginSchema = object({
    email: string().email().required('Email is required'),
    password: string().required('Password is required'),
}).required();

type LoginFormData = InferType<typeof loginSchema>;

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        setIsLoading(true);
        void signIn('credentials', {
            email: data?.email,
            password: data?.password,
            redirect: false,
            callbackUrl: '/dashboard',
        }).then((res) => {
            if (res?.ok) {
                console.log("res", res)
                setIsLoading(false);
                // update({token:res?.data?.})
                router.push('/dashboard');
                toast({
                    description: 'login was successful',
                });
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.',
                });
                setIsLoading(false);
            }
            setIsLoading(false);
        });
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
            <Button disabled={isLoading} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Please wait
            </Button>
        </form>
    );
};

export default LoginForm;
