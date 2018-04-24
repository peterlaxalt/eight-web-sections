import {
  Node,
  html,
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
  center
} from "../../../../../dank/html";

import template from "../../../../components/email/email_master/email_master";
import ImageLink from "../../../../components/email/image_link/image_link";
import HeaderRow from "../../../../components/email/header_row/header_row";
import FooterRow from "../../../../components/email/footer_row/footer_row";
import BodyRow from "../../../../components/email/body_row/body_row";
import BodyFooter from "../../../../components/email/body_footer/body_footer";
import Button from "../../../../components/email/button/button";
import DividerLine from "../../../../components/email/divider/divider";

// components

// content

export default template(
  {
    stylesheet: "/shopify_arrived.css"
  },
  div(
    {},
    HeaderRow(
      {
        background: "bg-clr-blue"
      },
      td(
        {
          width: "100%",
          class: "headline",
          colspan: "2"
        },
        span(
          {
            class: "head-super"
          },
          "This just in!"
        ),
        img({
          src:
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/0b8829f2-333d-45b6-93d3-499fc5f6bf1d.png",
          alt: "Your package has arrived",
          width: "455px",
          class: "headline-img"
        }),
        div(
          {
            class: "order-number"
          },
          "Order #3734209069144"
        )
      )
    ),
    BodyRow(
      {
        background: "bg-clr-galaxy"
      },
      td(
        {
          class: "content"
        },
        img({
          src:
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/b1dd50ed-d65f-4a23-a292-9fda2b2acdbe.png",
          alt: "Today's the day",
          width: "230px",
          class: "headline-img"
        }),
        p({}, "Your Eight products have arrived safely."),
        Button({
          href: "mailto:appfeedback@eightsleep.com",
          text: "Send Feedback",
          class: "bg-clr-purple"
        }),
        DividerLine()
      )
    ),
    BodyFooter({
      link: "mailto:support@eightsleep.com",
      button: "Contact Us",
      buttonClass: "bg-clr-purple"
    }),
    FooterRow({
      unsubscribe: "*|UNSUB|*"
    })
  )
);
