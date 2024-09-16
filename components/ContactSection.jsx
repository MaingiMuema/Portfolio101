// components/ContactSection.js
export default function ContactSection() {
    return (
      <div className="p-4 bg-primary text-white text-center">
        <h3 className="text-lg font-semibold">Connect with Me</h3>
        <div className="mt-2 space-x-4">
          <a href="https://youtube.com@diffusion_gen" target="_blank" className="hover:underline">Youtube</a>
          <a href="https://www.instagram.com/diffusion.gen" target="_blank" className="hover:underline">Instagram</a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Mark Maingi. All rights reserved.</p>
      </div>
    );
  }
