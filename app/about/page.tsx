import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Japan Sim Trip',
  description: 'Learn about Japan Sim Trip - your trusted resource for connectivity solutions in Japan.',
};

export default function About() {
  return (
    <div className="container py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Japan Sim Trip</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Japan Sim Trip is your comprehensive guide to staying connected during your travels in Japan. 
            We provide detailed, up-to-date information about SIM cards, pocket WiFi options, and JR Pass 
            to help international visitors navigate Japan&apos;s connectivity landscape.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="mb-4">
            We understand that staying connected while traveling is essential in today&apos;s world. Our mission 
            is to make it easy for international visitors to find the best connectivity solutions for their 
            specific needs in Japan, whether it&apos;s for a short vacation or an extended stay.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Cover</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>SIM Cards:</strong> Comprehensive guides on prepaid SIM cards available at airports, convenience stores, and online</li>
            <li><strong>Pocket WiFi:</strong> Detailed reviews of pocket WiFi rental services and pricing comparisons</li>
            <li><strong>JR Pass:</strong> Everything you need to know about the Japan Rail Pass, including eligibility, pricing, and how to use it</li>
            <li><strong>eSIM Options:</strong> Modern solutions for compatible devices</li>
            <li><strong>Free WiFi Spots:</strong> Where to find reliable free WiFi across Japan</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Japan Sim Trip?</h2>
          <p className="mb-4">
            Our content is created by travelers for travelers. We regularly update our guides based on the 
            latest information and real user experiences. We aim to provide honest, unbiased recommendations 
            to help you make the best choice for your Japan adventure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions or suggestions? We&apos;d love to hear from you! While we don&apos;t have a contact 
            form at the moment, we&apos;re always working to improve our content based on traveler feedback.
          </p>

          <p className="mt-8 text-gray-600">
            Safe travels and enjoy your connected journey through Japan!
          </p>
        </div>
      </article>
    </div>
  );
}