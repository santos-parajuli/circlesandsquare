import { menudata, testimonials } from '@/lib/data';

import EmbedSocialHashtag from '@/components/pages/home/instapost';
import HeroSection from '@/components/pages/home/hero';
import TestimonialsComponent from '@/components/pages/home/testimonial';

export default function Page() {
	return (
		<>
			<HeroSection menudata={menudata} />
			<EmbedSocialHashtag />
			<TestimonialsComponent testimonials={testimonials} />
		</>
	);
}
