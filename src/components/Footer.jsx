

const Footer = () => {
  return (
    <div className="bg-[#f8f8f8]">


      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex justify-between flex-wrap flex-col md:flex-row">

            {/* ======================= SHOP ================================= */}
            <div className="px-5 py-6">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase ">
                Shop
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Men&apos;s Boots
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Boots
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Men&apos;s Sneakers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Sneakers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Men&apos;s Shoes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Shoes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Men&apos;s Jackets
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Women&apos;s Jackets
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Accessories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* ======================= ABOUT ================================= */}
            <div className="px-5 py-6">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                About
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Featured Press
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Reviews
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Locations
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Ambassadors
                  </a>
                </li>
              </ul>
            </div>

            {/* ======================= SUPPORT ================================= */}
            <div className="px-5 py-6">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Support
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Shoe Care
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Accessibility Statement
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* ======================= SIGN UP ================================= */}
            <div className="px-5 py-6">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Sign Up For Early Access & Exclusive Events
              </h2>
              <div className="newsletter-wrap" style={{ transition: "all" }}>
                <form
                >
                  <div className="klaviyo_field_group" style={{ transition: "all" }}>
                    <label
                      htmlFor="k_id_email"
                      hidden=""
                      style={{ transition: "all" }}
                      className=""
                      data-userway-font-size={16}
                    >
                      Email
                    </label>{" "}
                    <input
                      type="email"
                      className="email"
                      defaultValue=""
                      required=""
                      name="email"
                      id="k_id_email"
                      placeholder="email@example.com"
                      aria-label="Translation missing: en.general.footer.email"
                      style={{ transition: "all" }}
                      data-userway-font-size={15}
                    />
                  </div>
                  <div className="klaviyo_messages" style={{ transition: "all" }}>
                    <div
                      className="success_message"
                      hidden=""
                      style={{ transition: "all" }}
                      data-userway-font-size={16}
                    >
                      Thanks for subscribing!
                      <br style={{ transition: "all" }} />
                      Please check your email for a confirmation message
                    </div>
                    <div
                      className="error_message"
                      hidden=""
                      style={{ transition: "all" }}
                      data-userway-font-size={16}
                    >
                      Please recheck the info you entered
                    </div>
                  </div>
                  <div className="klaviyo_form_actions" style={{ transition: "all" }}>
                    <button
                    >
                      <span
                        className="button-label-available"
                        style={{ transition: "all" }}
                        data-userway-font-size={13}
                      >
                        Join
                        <span
                          className="mobile--hide"
                          style={{ transition: "all" }}
                          data-userway-font-size={13}
                        >
                          &nbsp;Team Thursday
                        </span>
                      </span>{" "}
                      <span
                        className="button-label-error"
                        style={{ transition: "all" }}
                        data-userway-font-size={13}
                      >
                        Error
                      </span>{" "}
                      <span
                        className="button-label-success"
                        style={{ transition: "all" }}
                        data-userway-font-size={13}
                      >
                        Success
                      </span>
                      <div className="button-label-spinner" style={{ transition: "all" }}>
                        <svg
                          className="svg-icon icon-spinner "
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transition: "all" }}
                        >
                          {" "}
                          <desc style={{ transition: "all" }} data-userway-font-size={13}>
                            Translation missing: en.general.icons.spinner Icon
                          </desc>{" "}
                          <use xlinkHref="#reuse-spinner" style={{ transition: "all" }} />
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer