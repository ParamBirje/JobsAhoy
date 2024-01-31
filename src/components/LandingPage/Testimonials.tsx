import GradientDivider from "../GradientDivider";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-5 mt-[8em] my-[4em]"
    >
      <div className="flex flex-col gap-[4em]">
        <GradientDivider />

        <h3 className="text-center text-5xl font-bold">
          What People Are Saying
        </h3>

        <div className="flex">
          <div
            className={`border border-white border-opacity-10 py-5 px-5 flex flex-col justify-center items-center gap-3 rounded-3xl text-center bg-gradient-to-br from-slate-800 via-primary-light to-primary-light`}
          >
            hello
          </div>
        </div>
      </div>
    </section>
  );
}
