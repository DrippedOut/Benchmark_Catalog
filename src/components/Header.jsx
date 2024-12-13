import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// Component imports
import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import { Separator } from "./ui/separator";

function Header() {
	const [isNavOpen, setNavOpen] = useState(false);
	const { orgRole , orgSlug } = useAuth();

	return (
	<div className="flex justify-between items-center shadow-md px-5 w-full h-[90px]">
		{/* Company Logo */}
		<img src={logo} alt="PANASONIC AUTOMOTIVE" width={150} height={50} draggable="false" style={{ pointerEvents: "none", userSelect: "none" }}/>

		{/*Large Screen Nav */}
		<ul className="hidden lg:flex gap-12">
			<Link to={"/"} className="text-black">
				<li className="font-medium text-lg hover:scale-110 transition-all cursor-pointer hover:text-primary">
				SEARCH
				</li>
			</Link>
			<Link to={"/Compare"} className="text-black">
				<li className="font-medium text-lg hover:scale-110 transition-all cursor-pointer hover:text-primary">
				COMPARE
				</li>
			</Link>
			{orgRole === "org:admin" && orgSlug === 'software' && (
				<Link to={"/Upload"} className="text-black">
					<li className="font-medium text-lg hover:scale-110 transition-all cursor-pointer hover:text-primary">
					UPLOAD
					</li>
				</Link>
			)}
		</ul>

		{/* Small Screen Nav */}
		<div className="lg:hidden flex gap-10 justify-between items-center">
			<Sheet open={isNavOpen} onOpenChange={setNavOpen}>
				<SheetTrigger asChild>
					<Button onClick={() => setNavOpen(true)} className="rounded-full p-3 border-gray-400 text-center text-2xl transition-all
					text-gray-600 hover:bg-gray-50 bg-transparent focus:outline-none">
						<IoIosMenu className="text-4xl mx-14"/>
					</Button>
				</SheetTrigger>
				<SheetContent side="right">
					<div className="p-6">
						<ul className="gap-8">
						<Link to={"/"} className="text-black hover:text-black">
							<li className="p-6 text-lg my-1 font-medium hover:scale-110 transition-all cursor-pointer ">
							SEARCH
							</li>
						</Link>
						<Separator />
						<Link to={"/Compare"} className="text-black hover:text-black">
							<li className="p-6 text-lg my-1 font-medium hover:scale-110 transition-all cursor-pointer ">
							COMPARE
							</li>
						</Link>
						<Separator />
						{orgRole === "org:admin" && orgSlug === 'software' && (
							<Link to={"/Upload"} className="text-black hover:text-black">
								<li className="p-6 text-lg my-1 font-medium hover:scale-110 transition-all cursor-pointer ">
								UPLOAD
								</li>
							</Link>
						)}	
						</ul>
					</div>
				</SheetContent>
			</Sheet>
		</div>

		{/* Sign-In Button or UserButton */}
		<div className="flex items-center gap-5">

			{/* This renders when signed out */}
			<SignedOut>
				<SignInButton mode="modal" forceRedirectUrl="/" className="bg-white font-medium text-lg hover:scale-110 transition-all cursor-pointer 
					border-none focus:border-none focus:ring-none ring-none active:ring-none active:outline-none  focus:outline-none">
					SIGN-IN
				</SignInButton>
			</SignedOut>

			{/* This renders when signed in */}
			<SignedIn>
				<UserButton/>
			</SignedIn>

		</div>
	</div>
  );
}

export default Header;
