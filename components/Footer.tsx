import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterColumn = ({ title, links }: { title: string; links: Array<string> }) => {
    return (
        <div className="footer_column">
            <h4 className=" font-semibold">{title}</h4>
            <ul className="flex flex-col gap-2 font-normal">
                {links.map((link) => {
                    return (
                        <Link href={"/"} key={link}>
                            {link}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer flexStart">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src={"/logo-purple.svg"}
                        width={115}
                        height={38}
                        alt="FLEXIBBLE"
                    />
                    <p className=" text-start font-normal text-sm mt-5 max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        maiores numquam quasi ex a odio iste tenetur? Error eum itaque,
                        nihil ab quod sed deleniti cumque reiciendis voluptas ipsum quasi.
                    </p>
                </div>

                <div className="flex flex-wrap gap-12">
                    <FooterColumn
                        title={footerLinks[0].title}
                        links={footerLinks[0].links}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <FooterColumn
                            title={footerLinks[1].title}
                            links={footerLinks[1].links}
                        />
                        <FooterColumn
                            title={footerLinks[2].title}
                            links={footerLinks[2].links}
                        />
                    </div>
                    <FooterColumn
                        title={footerLinks[3].title}
                        links={footerLinks[3].links}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <FooterColumn
                            title={footerLinks[4].title}
                            links={footerLinks[4].links}
                        />
                        <FooterColumn
                            title={footerLinks[5].title}
                            links={footerLinks[5].links}
                        />
                    </div>
                    <FooterColumn
                        title={footerLinks[6].title}
                        links={footerLinks[6].links}
                    />
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>@ {new Date().getFullYear()} Flexibble. All Rights Reserved</p>
                <p className=" text-gray">
                    <span className="text-black font-semibold">12,000 </span>
                    projects shared
                </p>
            </div>
        </footer>
    );
};

export default Footer;
