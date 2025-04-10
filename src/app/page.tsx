import Image from "next/image";
import { Coffee, Clock, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Daily Grind
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Artisanal coffee crafted with passion in the heart of the city
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Coffee beans"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, The Daily Grind has been serving the finest
              specialty coffee sourced from sustainable farms around the world.
              Our baristas are trained to bring out the best flavors in every
              cup.
            </p>
            <p className="text-lg">
              We believe in creating a welcoming space where coffee lovers can
              gather, work, or simply enjoy a moment of peace.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-stone-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Espresso",
                description: "Rich and intense single shot of espresso",
                price: "$3.50",
              },
              {
                name: "Cappuccino",
                description: "Espresso with steamed milk and silky foam",
                price: "$4.50",
              },
              {
                name: "Cold Brew",
                description: "Smooth and refreshing 16-hour steeped coffee",
                price: "$4.75",
              },
              {
                name: "Avocado Toast",
                description: "Sourdough with smashed avocado, cherry tomatoes",
                price: "$8.50",
              },
              {
                name: "Blueberry Muffin",
                description: "Freshly baked with organic blueberries",
                price: "$3.75",
              },
              {
                name: "Breakfast Burrito",
                description: "Scrambled eggs, black beans, cheese, and salsa",
                price: "$9.50",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-stone-600 mb-4">{item.description}</p>
                <p className="text-amber-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="text-amber-600 mr-2" size={24} />
              <h3 className="text-xl font-bold">Location</h3>
            </div>
            <p className="mb-6">123 Coffee Street, Downtown</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510281!2d-73.9878449242396!3d40.74844097138996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689872481233!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="text-amber-600 mr-2" size={24} />
              <h3 className="text-xl font-bold">Hours</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <div className="mt-8">
              <div className="flex items-center">
                <Phone className="text-amber-600 mr-2" size={24} />
                <h3 className="text-xl font-bold">Contact</h3>
              </div>
              <p className="mt-2">(555) 123-4567</p>
              <p className="mt-1">info@thedailygrind.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Coffee className="mr-2" size={24} />
                The Daily Grind
              </h2>
              <p className="mt-2 text-stone-400">
                Crafting exceptional coffee experiences since 2010
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Twitter
              </a>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} The Daily Grind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}