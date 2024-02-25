export default function CallToAction() {
  return (
    <section className="bg-secondary text-black" id="call_to_action">
      <div className="max-w-7xl mx-auto px-5 py-10 flex justify-between items-center">
        <div className="flex flex-col gap-5 w-1/2">
          <h3 className="text-4xl font-extrabold">Start your journey today.</h3>
          <p className="text-gray-800 tracking-wide">
            Stop the tiresome search juggling around dozens of sites. Join the
            JobsAhoy community! Discover endless possibilities and make your
            next career move abroad.
          </p>
        </div>

        <div className="h-full w-1/2 flex justify-end items-center gap-1">
          <button className="text-secondary tracking-wide text-lg text-left h-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-500 rounded-sm rounded-bl-2xl rounded-tl-2xl py-8 px-8 font-medium w-1/4 duration-100 hover:brightness-110">
            Explore
            <br />
            Jobs
          </button>

          <button className="text-secondary tracking-wide text-lg text-right h-full bg-gradient-to-tl from-blue-400 via-accent to-accent rounded-sm rounded-br-2xl rounded-tr-2xl py-8 px-8 font-medium w-1/4 duration-100 hover:brightness-110">
            Create
            <br />
            Account
          </button>
        </div>
      </div>
    </section>
  );
}
