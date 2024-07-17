import React from "react";
import { useParams } from "react-router-dom";
import placeholderImage from "../../../assets/images/placeholder.jpg";
import blogs from "../../../utils/blogs";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiExternalLink } from "react-icons/fi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const BlogDetail = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState({});
  const url = window.location.href;

  useEffect(() => {
    const current_blog = blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <h1 className="text-4xl text-center font-bold mb-8">{blog?.title}</h1>
      <div className="my-8 text-center">
        {/* <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blog?.img}
          alt="Blog Main Image"
          className="main_blog_image"
        /> */}
      </div>
      <div className="flex flex-wrap items-center justify-center mt-16 mb-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span>
              <strong className="text-primary text-2xl">
                SHARDA PRODUCTION{" "}
                <span className="text-lg">({blog?.date})</span>
              </strong>
            </span>
          </div>
          <div className="mt-4">
            {blog?.description?.split("\n")?.map((s, i) => (
              <React.Fragment key={i + 1}>
                <p className="text-justify text-lg text-gray-700 leading-relaxed mb-4">
                  {s}
                </p>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-6">
            <div className="px-4 py-6 rounded shadow-lg bg-gray-100">
              <div className="">
                <h4 className="mb-3 text-xl font-semibold">Others:</h4>
                <p className="flex items-center gap-3 mb-2">
                  <span>
                    <SiInstagram className="text-2xl text-pink-600" />
                  </span>
                  <a
                    href={blog?.instagram_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <span className="text-lg">Instagram</span> <FiExternalLink />
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <SiLinkedin className="text-2xl text-blue-600" />
                  </span>
                  <a
                    href={blog?.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <span className="text-lg">LinkedIn</span> <FiExternalLink />
                  </a>
                </p>
              </div>

              <div className="w-full h-[1px] bg-gray-400 my-6"></div>

              <h4 className="mb-3 text-xl font-semibold">Share:</h4>
              <div className="flex flex-wrap items-center gap-4">
                <EmailShareButton url={url} title="SHARDA PRODUCTION -">
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <FacebookShareButton url={url} title="SHARDA PRODUCTION -">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={url} title="SHARDA PRODUCTION -">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url={url} title="SHARDA PRODUCTION -">
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <WhatsappShareButton url={url} title="SHARDA PRODUCTION -">
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>

              <div className="w-full h-[1px] bg-gray-400 my-6"></div>

              <h4 className="mb-3 text-xl font-semibold">Tag:</h4>
              <div className="flex flex-wrap">
                {blog?.tags?.map((tag) => (
                  <button
                    key={tag}
                    className="px-2 py-1 m-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 transition-colors duration-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
