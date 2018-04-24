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
import DividerLine from "../../../../components/email/divider/divider";
import Button from "../../../../components/email/button/button";
import OrderStatus from "../../../../components/email/order-status/order-status";

// components

// content

export default template(
  {
    stylesheet: "shopify_confirmed.css"
  },
  div(
    {},
    HeaderRow(
      {
        background: "bg-clr-purple"
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
          "Thanks, {{ customer.first_name }}!"
        ),
        img({
          src:
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/4c7f27d6-5e8d-4abb-94f2-22d4fd2a98cd.png",
          alt: "Your order is confirmed",
          width: "370px",
          class: "headline-img"
        }),
        div(
          {
            class: "order-number"
          },
          "Order #3734209069144"
        ),
        OrderStatus(
          {
            step: "3"
          }
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
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/bde11f00-6850-4183-8a99-edc56f79d0b8.png",
          alt: "The journey to better rest begins here",
          width: "380px",
          class: "headline-img"
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
