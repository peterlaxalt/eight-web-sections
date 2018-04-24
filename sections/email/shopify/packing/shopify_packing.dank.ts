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
    stylesheet: "shopify_packing.css"
  },
  div(
    {},
    HeaderRow(
      {
        background: "bg-clr-lightpurple"
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
          "It's happening, {{ customer.first_name }}!"
        ),
        img({
          src:
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/31dad96c-18a6-489b-bbd2-f816e791eb6f.png",
          alt: "We’re packaging your order",
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
            "https://d3k81ch9hvuctc.cloudfront.net/company/QtJCHb/images/809c892e-7288-4666-a668-dcab1660c92e.png",
          alt: "Made to order, with love",
          width: "380px",
          class: "headline-img"
        }),
        p(
          {},
          "This unique technique allows us to be sure that every product is hand crafted to the pinnacle quality that we believe in. See how below."
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
