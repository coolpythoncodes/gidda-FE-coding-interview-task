import logo from '@/public/logo.png';
import { type Metadata } from 'next';
import Image from 'next/image';
import LoginForm from './login-form';

export const metadata: Metadata = {
    title: 'Login',
};

const LoginPage = () => {
    return (
        <main className="grid h-screen place-items-center bg-gray-50 font-redHatDisplay">
            <div>
                <Image src={logo} alt="" className="mx-auto" />
                <div className="mt-6 flex flex-col items-center gap-y-3">
                    <h1 className="text-black1 text-[30px]/[38px] font-semibold">
                        Log in to your account
                    </h1>
                    <p className="text-black3 text-base font-normal">
                        Welcome back! Please enter your details.
                    </p>
                    <LoginForm />
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
