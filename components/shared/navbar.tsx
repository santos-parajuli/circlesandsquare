'use client';

import { Instagram, Mail, Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Menu', href: '/menu' },
	{ label: 'Locations', href: '/locations' },
	{ label: 'Catering', href: '/catering' },
	{ label: 'Wholesale', href: '/wholesale' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' },
];

export default function Navbar() {
	const [isSticky, setIsSticky] = useState(false);
	const sentinelRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!sentinelRef.current) return;

		const observer = new IntersectionObserver(([entry]) => setIsSticky(!entry.isIntersecting), { root: null, threshold: 0 });

		observer.observe(sentinelRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			{/* Sentinel */}
			<div ref={sentinelRef} className='h-px' />

			<header className={`sticky top-0 z-50 bg-white border-b transition-all ${isSticky ? 'shadow-md' : 'border-neutral-200'}`}>
				{/* Desktop Top Row (hidden on mobile) */}
				<div className={`overflow-hidden transition-all duration-300 hidden md:flex ${isSticky ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'}`}>
					<div className='w-full  mx-auto flex items-center justify-around px-4 py-3'>
						<div />
						<Link href='/' className='flex items-center'>
							<Image src='/images/circles-squares.png' alt='Circles & Squares Bakery' width={300} height={80} priority />
						</Link>
						<div className='flex items-center gap-4'>
							<a href='https://www.instagram.com/circlesandsquaresbakery' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition'>
								<Instagram strokeWidth={1} />
							</a>
							<a href='mailto:info@circlesandsquares.ca' className='hover:scale-110 transition'>
								<Mail strokeWidth={1} />
							</a>
						</div>
					</div>
				</div>

				{/* Navbar Row */}
				<nav className='bg-neutral-50'>
					<div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-4'>
						{/* Mobile layout */}
						<div className='flex w-full p-1 items-center justify-between md:hidden'>
							{/* Hamburger */}
							<Sheet>
								<SheetTrigger asChild>
									<Menu />
								</SheetTrigger>
								<SheetContent side='left' className='p-6'>
									<SheetHeader>
										<SheetTitle>Circles & Square Bakery</SheetTitle>
									</SheetHeader>
									<ul className='flex flex-col gap-6 mt-4'>
										{navItems.map((item) => (
											<li key={item.href}>
												<Link href={item.href}>
													<SheetClose asChild>
														<Button variant='ghost' className='w-full justify-start'>
															{item.label}
														</Button>
													</SheetClose>
												</Link>
											</li>
										))}
									</ul>
								</SheetContent>
							</Sheet>

							{/* Logo */}
							<Link href='/' className='absolute left-1/2 transform -translate-x-1/2'>
								<Image src='/images/circles-squares.png' alt='Circles & Squares Bakery' width={250} height={50} />
							</Link>

							{/* Socials */}
							<div className='flex items-center gap-4'>
								<a href='https://www.instagram.com/circlesandsquaresbakery' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition'>
									<Instagram strokeWidth={1} />
								</a>
								<a href='mailto:info@circlesandsquares.ca' className='hover:scale-110 transition'>
									<Mail strokeWidth={1} />
								</a>
							</div>
						</div>
						{/* Logo on desktop sticky */}
						{isSticky && (
							<Link href='/' className='hidden md:flex  shrink-0'>
								<Image src='/images/circles-squares.png' alt='Circles & Squares Bakery' width={220} height={50} />
							</Link>
						)}
						{/* Desktop Links */}
						<ul className='hidden md:flex items-center gap-8 text-[16px] font-medium uppercase tracking-wide mx-auto'>
							{navItems.map((item) => (
								<li key={item.href} className='hover:scale-105 transition'>
									<Link href={item.href} className='hover:text-primary'>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}
