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

// content

export default template(
  {
    stylesheet: "shopify_ready_ship.css"
  },
  div(
    {},
    HeaderRow(
      {
        background: "bg-clr-green"
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
          "Great news, {{ customer.first_name }}!"
        ),
        img({
          src:
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/10f1b475-cc08-4322-8936-5642b6043922.png",
          alt: "Your order is ready to ship",
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
          span({}, "Due to the nature of our hand made products, "),
          strong(
            {
              class: "txt-clr-green"
            },
            "we ship your mattress and Eight Sleep Tracker separately "
          ),
          span({}, "— you can track them below.")
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
