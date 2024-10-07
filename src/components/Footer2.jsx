import React from 'react'
import { AiFillEnvironment } from 'react-icons/ai';

const Footer2 = () => {
    return (
        <footer className="flex justify-center text-neutral-100 py-8 bg-slate-600 dark:border-t-2 border-slate-600 dark:bg-black">
            <div className="flex flex-wrap gap-8 px-4 justify-between w-[1291px] hover:underline underline-offset-8 decoration-4">
        <div className="grid gap-2"><a className="text-xl font-bold" href="/home">Home</a><a href="/cities">Cities</a><a
                href="/signin">Login</a></div>
        <div className="space-y-2">
            <p className="text-xl font-bold">Contact Us</p>
            <p>123 Street, City</p>
            <p>Email: contact@mytinerary.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
        <div className="space-y-2 grid">
            <p className="text-xl font-bold">Follow Us</p><a href="/home"><i className="fa-brands fa-square-facebook pr-2"
                    aria-hidden="true"></i>Facebook</a><a href="/home"><i className="fa-brands fa-square-instagram pr-2"
                    aria-hidden="true"></i>Instagram</a><a href="/home"><i className="fa-brands fa-square-twitter pr-2"
                    aria-hidden="true"></i>Twitter</a>
        </div>
    </div>
</footer>
    )
}

export default Footer2


