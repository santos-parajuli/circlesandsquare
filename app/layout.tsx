import './globals.css';

import { Figtree, Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/shared/footer';
import type { Metadata } from 'next';
import Navbar from '@/components/shared/navbar';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://www.circlesandsquares.ca'),
	title: {
		default: 'Circles & Squares Bakery | Artisan Bakery in Toronto',
		template: '%s | Circles & Squares Bakery',
	},
	description: 'Circles & Squares Bakery is a Toronto-based artisan bakery specializing in handcrafted pastries, sourdough bread, catering, and wholesale baking. Visit our East York and Davisville locations.',
	keywords: [
		'Circles & Squares Bakery',
		'Toronto bakery',
		'artisan bakery Toronto',
		'sourdough bread Toronto',
		'Japanese milk bread',
		'bakery East York',
		'bakery Davisville',
		'bakery catering Toronto',
		'wholesale bakery Toronto',
		'pastries Toronto',
	],

	authors: [{ name: 'Circles & Squares Bakery' }],
	creator: 'Circles & Squares Bakery',
	publisher: 'Circles & Squares Bakery',

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},

	openGraph: {
		type: 'website',
		locale: 'en_CA',
		url: 'https://www.circlesandsquares.ca',
		siteName: 'Circles & Squares Bakery',
		title: 'Circles & Squares Bakery | Handmade Bread & Pastries in Toronto',
		description: 'Handmade bread, pastries, catering, and wholesale baking from Circles & Squares Bakery. Proudly serving Toronto with locations in East York and Davisville.',
		images: [
			{
				url: '/images/circles-squares.png',
				width: 1200,
				height: 630,
				alt: 'Circles & Squares Bakery Toronto',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Circles & Squares Bakery | Toronto Artisan Bakery',
		description: 'Freshly baked bread, pastries, catering & wholesale baking. Visit Circles & Squares Bakery in Toronto.',
		images: ['/images/circles-squares.png'],
	},

	alternates: {
		canonical: 'https://www.circlesandsquares.ca',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={figtree.variable}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
