"use client"
import Social from "../ui/Social";
const Footer = () => {
    return (
        <div className="flex justify-between  p-4 bg-slate-300">
            <div>
                <h3>© 2024 Arado. All Rights Resevered</h3>
            </div>
            <div>
                <Social></Social>
            </div>
        </div>
    );
};

export default Footer;