"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Acasă",
          id: "home",
        },
        {
          name: "Produse",
          id: "produse",
        },
        {
          name: "Comandă",
          id: "comanda",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Gianina’s Jewelry Box"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "radial-gradient",
      }}
      title="Gianina’s Jewelry Box"
      description="Brățări handmade elegante pentru orice ocazie. Descoperă colecția noastră de brățări unice, realizate cu grijă și pasiune."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
          imageAlt: "Brățară 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          imageAlt: "Brățară 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
          imageAlt: "Brățară 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-artisan-working-with-beaded-necklace_23-2149025923.jpg",
          imageAlt: "Brățară 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
          imageAlt: "Brățară 5",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
          imageAlt: "Brățară 6",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-artisan-working-with-beaded-necklace_23-2149025923.jpg",
          imageAlt: "Brățară 7",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
          imageAlt: "Brățară 8",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          imageAlt: "Brățară 9",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
          imageAlt: "Brățară 10",
        },
      ]}
      buttons={[
        {
          text: "Vezi Produse",
          href: "#produse",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-artisan-working-with-beaded-necklace_23-2149025923.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Apreciat de peste 500 de clienți"
      marqueeItems={[
        {
          type: "text",
          text: "Artizanal",
        },
        {
          type: "text",
          text: "Elegant",
        },
        {
          type: "text",
          text: "Unic",
        },
        {
          type: "text",
          text: "Calitate",
        },
        {
          type: "text",
          text: "Handmade",
        },
      ]}
    />
  </div>

  <div id="produse" data-section="produse">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Brățară Elegantă",
          price: "50 lei",
          variant: "Handmade",
          imageSrc: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
        },
        {
          id: "p2",
          name: "Brățară cu Perle",
          price: "70 lei",
          variant: "Handmade",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
        },
        {
          id: "p3",
          name: "Brățară Casual",
          price: "40 lei",
          variant: "Handmade",
          imageSrc: "http://img.b2bpic.net/free-photo/female-artisan-working-with-beaded-necklace_23-2149025923.jpg",
        },
        {
          id: "p4",
          name: "Brățară Boho",
          price: "45 lei",
          variant: "Handmade",
          imageSrc: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
        },
      ]}
      title="Brățările noastre"
      description="Colecția noastră de bijuterii artizanale."
    />
  </div>

  <div id="comanda" data-section="comanda">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Plasează o comandă"
      description="Completează formularul și te vom contacta pentru livrare."
      inputs={[
        {
          name: "nume",
          type: "text",
          placeholder: "Nume",
          required: true,
        },
        {
          name: "telefon",
          type: "tel",
          placeholder: "Telefon",
          required: true,
        },
        {
          name: "produs",
          type: "text",
          placeholder: "Produs dorit",
          required: true,
        },
      ]}
      textarea={{
        name: "adresa",
        placeholder: "Adresă livrare",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/woman-making-origami-with-japanese-paper_23-2149048359.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Telefon",
          content: "0799179704",
        },
        {
          id: "2",
          title: "Livrare",
          content: "Curier sau Poșta Română",
        },
        {
          id: "3",
          title: "Program",
          content: "Luni-Vineri 09:00 - 18:00",
        },
      ]}
      title="Informații Contact"
      description="Întrebări frecvente despre livrare și contact."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      title="Ce spun clienții noștri"
      description="Feedback de la pasionații de accesorii handmade."
      testimonials={[
        {
          id: "t1",
          name: "Ana Maria",
          date: "10.01.2026",
          title: "Calitate excepțională",
          quote: "Brățările sunt superbe și foarte bine lucrate!",
          tag: "Client fidel",
          avatarSrc: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
          imageAlt: "elegant handmade jewelry close up",
        },
        {
          id: "t2",
          name: "Ionel Popescu",
          date: "12.01.2026",
          title: "Cadoul perfect",
          quote: "Am cumpărat un cadou și a fost foarte apreciat.",
          tag: "Cadou",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          imageAlt: "elegant handmade beaded bracelet",
        },
        {
          id: "t3",
          name: "Elena Dumitru",
          date: "15.01.2026",
          title: "Livrare rapidă",
          quote: "A ajuns coletul foarte repede. Mulțumesc!",
          tag: "Livrare",
          avatarSrc: "http://img.b2bpic.net/free-photo/female-artisan-working-with-beaded-necklace_23-2149025923.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-making-accessories_23-2148264376.jpg",
          imageAlt: "pearl bracelet jewelry handmade",
        },
        {
          id: "t4",
          name: "Cristina M.",
          date: "18.01.2026",
          title: "Design unic",
          quote: "Nu am mai văzut modele atât de frumoase.",
          tag: "Stil",
          avatarSrc: "http://img.b2bpic.net/free-photo/buta-shape-blue-jewelry-pin_114579-12097.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/female-artisan-working-with-beaded-necklace_23-2149025923.jpg",
          imageAlt: "casual minimalist handmade bracelet",
        },
        {
          id: "t5",
          name: "Radu V.",
          date: "20.01.2026",
          title: "Recomand cu drag",
          quote: "O experiență minunată de cumpărături.",
          tag: "Recomandare",
          avatarSrc: "http://img.b2bpic.net/free-photo/quran-holly-book-islam_93675-131572.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-making-origami-with-japanese-paper_23-2149048359.jpg",
          imageAlt: "hand making jewelry craft table",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Site",
          items: [
            {
              label: "Acasă",
              href: "#home",
            },
            {
              label: "Produse",
              href: "#produse",
            },
          ],
        },
        {
          title: "Suport",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2026 Gianina’s Jewelry Box - Toate drepturile rezervate"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
