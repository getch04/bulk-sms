import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  mass1,
  mass2,
  mass3,
  mass4,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Customers" },
  { value: "500+", label: "Campaigns" },
  { value: "250k+", label: "Message Sent" },
];

export const popularServices = [
  {
    imgURL: mass1,
    name: "Mass Text Messaging",
    description: "Efficiently reach thousands with just one click.",
  },
  {
    imgURL: mass2,
    name: "Two-Way Messaging",
    description: "Engage with your audience through interactive messaging.",
  },
  {
    imgURL: mass3,
    name: "Automated Scheduling",
    description: "Schedule your campaigns for timely delivery.",
  },
  {
    imgURL: mass4,
    name: "Personalized Messaging",
    description: "Customize messages for a personal touch.",
  },
];

export const services = [
  {
    imgURL: support,
    label: "Dedicated Support",
    subtext:
      "Our Support Team is dedicated to helping you get your SMS messages across.",
  },
  {
    imgURL: shieldTick,
    label: "Reliable Delivery",
    subtext: "We send your messages through the most reliable routes on offer.",
  },
  {
    imgURL: support,
    label: "Clear Regulations",
    subtext:
      "Easy access to information on industry best practices and regional regulations.",
  },
  {
    imgURL: truckFast,
    label: "Easy Access",
    subtext: "Access all our SMS Solutions with one account.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Mass Text Messaging", link: "/" },
      { name: "Two-Way Messaging", link: "/" },
      { name: "Automated Scheduling", link: "/" },
      { name: "Personalized Messaging", link: "/" },
      { name: "Dedicated Support", link: "/" },
      { name: "Reliable Delivery", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@sms.com", link: "mailto:customer@sms.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
