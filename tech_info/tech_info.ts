import {
  Node,
  html,
  $,
  head,
  body,
  div,
  link,
  meta,
  table,
  td,
  tr,
  img,
  a,
  strong,
  span,
  p,
  h1,
  h2,
  center
} from "../../../../dank/html";

import HeadlineAlternative from "../../../components/web/alternative_header/alternative_header";
import UnderlineHeader from "../../../components/web/underline_header/underline_header";
import ImageColumn from "../../../components/web/image_column/image_column";
import AngleDivider from "../../../components/web/angle_divider/angle_divider";
import layout from "../../../components/web/layout/layout";

// content

export default layout(
  {
    stylesheet: "tech_info.css",
    shopify_theme:
      "https://cdn.shopify.com/s/files/1/1354/6123/t/9/assets/theme.scss.css",
    shopify_app:
      "https://cdn.shopify.com/s/files/1/1354/6123/t/9/assets/app.min.css"
  },
  div(
    {
      class: "d-tech-row"
    },
    div(
      {
        class: "d-tech-top"
      },
      div(
        {
          class: "d-headline"
        },
        img({
          class: "d-w-fade-in-1",
          src: "../assets/life-change-svg.svg"
        }),
        div(
          {
            class: "d-left"
          },
          h1(
            {
              class: "d-w-slide-to-top-1"
            },
            "Eight will change your life"
          )
        ),
        div(
          {
            class: "d-right"
          },
          p(
            {
              class: "d-w-slide-to-top-3"
            },
            "Our technology is developed with over 200 billion data points and 10 million hours of sleep analyzed"
          )
        )
      )
    ),
    div(
      {
        class: "d-line-row d-w-fade-in-1"
      },
      div(
        {
          class: "d-img-hub"
        },
        img({
          class: "d-w-fade-in-1",
          src: "../assets/img-hub-image.png"
        })
      ),
      HeadlineAlternative({
        headline: "You can improve your lifestyle through science",
        subhead: "Insights",
        paragraph:
          "The Eight technology is always improving, this means your hub will get smarter over time as it learns about you and our data science develops new technology to make your life healthier."
      })
    ),
    div(
      {
        class: "d-phone-focus-row"
      },
      div(
        {
          class: "d-inner"
        },
        div(
          {
            class: "d-img-app-stack"
          },
          img({
            class: "d-w-slide-to-top-2",
            src: "../assets/img-app-phone.png"
          })
        ),
        HeadlineAlternative({
          headline: "Get more and better rest",
          subhead: "Design",
          paragraph:
            "Unlike any other mattress, Eight goes beyond premium comfort offering technology features that will lead to a more restful night."
        })
      )
    ),
    div(
      {
        class: "d-tri-col-row bg-clr-lightgalaxy"
      },
      div(
        {
          class: "d-inner"
        },
        ImageColumn({
          image:
            "https://cdn.shopify.com/s/files/1/1354/6123/files/gif-tracking.gif?461653664558221315",
          header: "Sleep tracking",
          paragraph:
            "Track over 15 factors about your sleep and health, including REM sleep, deep sleep, heart rate and respiratory rate.",
          anim: 1
        }),
        ImageColumn({
          image:
            "https://cdn.shopify.com/s/files/1/1354/6123/files/gif-iot.gif?461653664558221315",
          header: "Smart Home Integration",
          paragraph:
            "Connect your Eight mattress to your smart home, including Amazon Alexa, Nest, and Philips Hue. Let it turn off your lights when you doze off, or brew your coffee when you wake up.",
          anim: 2
        }),
        ImageColumn({
          image:
            "https://cdn.shopify.com/s/files/1/1354/6123/files/gif-alarm.gif?461653664558221315",
          header: "Smart Alarm",
          paragraph:
            "Eight detects when you are in light sleep and triggers the alarm when its easier for your body to wake up.",
          anim: 3
        })
      )
    ),
    div(
      {
        class: "d-split-row bg-clr-lightgalaxy"
      },
      div(
        {
          class: "d-inner"
        },
        div(
          {
            class: "d-col"
          },
          UnderlineHeader({
            headline: "Orchestrate the perfect night",
            subhead: "Smart home"
          }),
          p(
            {
              class: "d-w-slide-to-top-1"
            },
            "Connect your Eight mattress to your smart home, including Amazon Alexa, Nest, and Philips Hue. Let it turn off your lights when you doze off, or brew your coffee when you wake up."
          )
        ),
        div(
          {
            class: "d-col"
          },
          p(
            {},
            img({
              class: "d-w-fade-in-1",
              src: "../assets/img-smart-home.png"
            })
          )
        )
      )
    ),
    div(
      {
        class: "d-download-row bg-clr-cream"
      },
      AngleDivider({ position: "top" }),
      img({
        class: "d-w-embellish",
        src: "../assets/img-organic-pink-corner.png"
      }),
      div(
        {
          class: "d-inner"
        },
        div(
          {
            class: "d-top"
          },
          div(
            {
              class: "d-col"
            },
            h2(
              {
                class: "d-w-slide-to-top-1"
              },
              "Define your own lifestyle"
            )
          ),
          div(
            {
              class: "d-col"
            },
            img({
              class: "d-img d-w-fade-in-1",
              src: "../assets/img-phone-state.png"
            })
          )
        ),
        div(
          {
            class: "d-bottom"
          },
          div(
            {
              class: "d-left"
            },
            p(
              {
                class: "txt-clr-galaxy d-w-slide-to-top-2"
              },
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu molestie nulla. Aenean eu dolor sed sapien rutrum hendrerit eu ac dolor. Aliquam do."
            ),
            a(
              {
                href:
                  "https://play.google.com/store/apps/details?id=com.eightsleep.eight",
                target: "_blank"
              },
              img({
                src: "../assets/img-play-store-download.png",
                width: "140px",
                class: "d-w-slide-to-top-2"
              })
            ),
            a(
              {
                href:
                  "https://itunes.apple.com/us/app/eight-sleep/id1086913845?ls=1&mt=8",
                target: "_blank"
              },
              img({
                src: "../assets/img-app-store-download.png",
                width: "140px",
                class: "d-w-slide-to-top-3"
              })
            )
          )
        )
      )
    ),
    div(
      {
        class: "d-testimonials"
      },
      div(
        {
          class: "d-inner d-w-fade-in-1"
        },
        p(
          {
            class: "d-testimonial d-w-slide-to-top-1"
          },
          "It's sort of like having an invisible butler."
        ),
        span(
          {
            class: "d-author d-w-slide-to-top-3"
          },
          "Vogue"
        )
      )
    )
  )
);
