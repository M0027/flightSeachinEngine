import { colors} from "../../statics/color";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: colors.primary }}
      className="mt-12"
    >
      <div
        className="
          max-w-6xl mx-auto
          px-6 py-10
          grid gap-8
          md:grid-cols-3
          text-white
        "
      >
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            FlightNow
          </h2>
          <p className="text-sm opacity-80 leading-relaxed">
            Find the best flights quickly,
            with clarity and transparent prices.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:opacity-70 cursor-pointer">Search flights</li>
            <li className="hover:opacity-70 cursor-pointer">fiter flights</li>
            {/* <li className="hover:opacity-70 cursor-pointer">Account</li> */}
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="font-semibold mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:opacity-70 cursor-pointer">About</li>
            <li className="hover:opacity-70 cursor-pointer">Privacy</li>
            <li className="hover:opacity-70 cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          border-t border-white/20
          text-center text-sm
          text-white/70
          py-4
        "
      >
        © {new Date().getFullYear()} FlightNow — All rights reserved
      </div>
    </footer>
  );
}
