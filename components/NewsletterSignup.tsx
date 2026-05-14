export function NewsletterSignup() {
  return (
    <section className="rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold">Newsletter signup</h3>
      <p className="mt-2 text-sm text-gray-700">Get key updates on AI copyright, lawsuits, and policy shifts.</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input type="email" placeholder="Enter your email" className="flex-1 rounded-md border border-gray-300 px-3 py-2" />
        <button className="rounded-md bg-black px-4 py-2 text-white">Subscribe</button>
      </div>
    </section>
  );
}
