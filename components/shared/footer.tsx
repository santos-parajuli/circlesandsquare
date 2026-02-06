import { Instagram, Mail } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer className='border-t bg-primary-foreground'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-6'>
				{/* Brand */}
				<div className='flex flex-col items-center gap-4 text-center lg:col-span-2 lg:items-start lg:text-left'>
					<Link href='/' className='flex items-center'>
						<Image src='/images/circles-squares.png' alt='Circles & Squares Bakery' width={200} height={50} />
					</Link>

					<p className='text-muted-foreground text-sm leading-relaxed max-w-sm'>A cozy neighbourhood bakery in Toronto, baking fresh bread, pastries, and comfort classics from scratch every day.</p>

					<div className='flex items-center gap-4 pt-2'>
						<a href='https://www.instagram.com/circlesandsquaresbakery' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='hover:opacity-80 transition'>
							<Instagram size={20} />
						</a>
						<a href='mailto:info@circlesandsquares.ca' aria-label='Email' className='hover:opacity-80 transition'>
							<Mail size={20} />
						</a>
					</div>
				</div>

				{/* Links */}
				<div className='grid grid-cols-2 gap-8 text-center sm:grid-cols-2 lg:col-span-4 lg:grid-cols-3 lg:text-left'>
					{/* Explore */}
					<div className='flex flex-col gap-4 items-center lg:items-start'>
						<h4 className='text-sm font-semibold uppercase tracking-wide'>Explore</h4>
						<ul className='text-sm text-muted-foreground space-y-2'>
							<li>
								<Link href='/menu' className='hover:text-foreground'>
									Menu
								</Link>
							</li>
							<li>
								<Link href='/locations' className='hover:text-foreground'>
									Locations
								</Link>
							</li>
							<li>
								<Link href='/catering' className='hover:text-foreground'>
									Catering
								</Link>
							</li>
							<li>
								<Link href='/wholesale' className='hover:text-foreground'>
									Wholesale
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div className='flex flex-col gap-4  items-center lg:items-start'>
						<h4 className='text-sm font-semibold uppercase tracking-wide'>Company</h4>
						<ul className='text-sm text-muted-foreground space-y-2'>
							<li>
								<Link href='/about' className='hover:text-foreground'>
									About Us
								</Link>
							</li>
							<li>
								<Link href='/contact' className='hover:text-foreground'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Visit */}
					<div className='flex flex-col gap-4 col-span-2 lg:col-span-1 lg:items-start'>
						<h4 className='text-sm font-semibold uppercase tracking-wide'>Visit Us</h4>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							197 Bartley Drive, East York
							<br />
							Toronto, ON M4A 1E6
							<br />
							Mon–Sat: 8am–6pm
							<br />
							Sun: 8am–5pm
						</p>
						<Link href='/locations' className='text-sm font-medium underline underline-offset-4 hover:opacity-80'>
							Get directions →
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className='border-t'>
				<div className='mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground'>
					© {new Date().getFullYear()} Circles & Squares Bakery · Designed and Developed by{' '}
					<a href='https://siwani.com.np/' target='_blank'>
						<span className='italic'>Santosh Parajuli</span>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
