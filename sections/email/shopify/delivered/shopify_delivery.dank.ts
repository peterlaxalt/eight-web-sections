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

// components

// content

export default template(
  {
    stylesheet: "shopify_delivery.css"
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
          "Today is the day, {{ customer.first_name }}!"
        ),
        img({
          src:
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/e49dccd4-6df5-43a8-81d4-11852cd22b19.png",
          alt: "A driver with one of your items is on their way",
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
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/1ced2f26-ca73-42dd-8197-af6542836220.png",
          alt: "Track your order",
          width: "230px",
          class: "headline-img"
        }),
        p(
          {},
          "Due to the nature of our hand made products, some items ship sooner than others."
        ),
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
