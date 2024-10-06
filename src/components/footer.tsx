"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

import Link from "next/link";


export function FooterComponent() {
  return (
    <footer className="bg-three ">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col justify-center items-center">
        <h3 className="mb-4 text-xl font-semibold">Aspirant OP</h3>
            <p className="text-sm text-muted-foreground text-center">
              A passionate web developer crafting beautiful and functional
              websites. Always learning, always creating.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-8 mt-3 py-10 border-t border-gray-700 sm:flex-row mx-24">
          <TooltipProvider>
            <div className="flex mt-2 space-x-4 sm:mt-0 gap-7 text-textColor">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://github.com/sushil016"
                    className="duration-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="w-10 h-10 text-iconColor" />
                    
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={5}
                  className="bg-iconColor px-3 py-2 text-xs font-medium rounded-full shadow-lg border-none TooltipContent"
                >
                  <div className="flex items-center space-x-2">
                    {/* <Github className="w-6 h-6 text-zinc-950" /> */}
                    <p className="text-zinc-950">Check out my GitHub</p>
                    <ExternalLink className="w-4 h-4 text-zinc-950" />
                  </div>
                  <div className="invisible absolute h-10 w-5 mt-1 ml-14 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"></div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://x.com/Sushil_Sahani37?t=Vf7WhfLqM3D2ZTb46HTtTw&s=09"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="w-10 h-10 text-iconColor" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-iconColor px-3 py-2 text-xs font-medium rounded-full shadow-lg border-none TooltipContent"
                >
                  <div className="flex items-center space-x-2 text-zinc-950">
                    {/* <Twitter className="w-4 h-4" /> */}
                    <p>Follow me on Twitter</p>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <div className="invisible absolute h-10 w-5 mt-1 ml-14 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"></div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://discord.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">Discord</span>
                    {/* <Image className="w-10 h-10 bg-black" src="@/assets/public.svg" alt="" width={10} height={10} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0,0,256,256"
                      width="40px"
                      height="40px"
                      fillRule="nonzero"
                    >
                      <g
                        fill="#ffbe6f"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M19.952,5.672c-1.904,-1.531 -4.916,-1.79 -5.044,-1.801c-0.201,-0.017 -0.392,0.097 -0.474,0.281c-0.006,0.012 -0.072,0.163 -0.145,0.398c1.259,0.212 2.806,0.64 4.206,1.509c0.224,0.139 0.293,0.434 0.154,0.659c-0.09,0.146 -0.247,0.226 -0.407,0.226c-0.086,0 -0.173,-0.023 -0.252,-0.072c-2.406,-1.492 -5.412,-1.567 -5.99,-1.567c-0.578,0 -3.585,0.075 -5.989,1.567c-0.225,0.14 -0.519,0.07 -0.659,-0.154c-0.14,-0.225 -0.07,-0.519 0.154,-0.659c1.4,-0.868 2.946,-1.297 4.206,-1.509c-0.074,-0.236 -0.14,-0.386 -0.145,-0.398c-0.083,-0.184 -0.273,-0.3 -0.475,-0.28c-0.127,0.01 -3.139,0.269 -5.069,1.822c-1.008,0.931 -3.023,6.379 -3.023,11.089c0,0.083 0.022,0.165 0.063,0.237c1.391,2.443 5.185,3.083 6.05,3.111c0.005,0 0.01,0 0.015,0c0.153,0 0.297,-0.073 0.387,-0.197l0.875,-1.202c-2.359,-0.61 -3.564,-1.645 -3.634,-1.706c-0.198,-0.175 -0.217,-0.477 -0.042,-0.675c0.175,-0.198 0.476,-0.217 0.674,-0.043c0.029,0.026 2.248,1.909 6.612,1.909c4.372,0 6.591,-1.891 6.613,-1.91c0.198,-0.172 0.5,-0.154 0.674,0.045c0.174,0.198 0.155,0.499 -0.042,0.673c-0.07,0.062 -1.275,1.096 -3.634,1.706l0.875,1.202c0.09,0.124 0.234,0.197 0.387,0.197c0.005,0 0.01,0 0.015,0c0.865,-0.027 4.659,-0.667 6.05,-3.111c0.04,-0.072 0.062,-0.153 0.062,-0.236c0,-4.71 -2.015,-10.158 -3.048,-11.111zM8.891,14.87c-0.924,0 -1.674,-0.857 -1.674,-1.913c0,-1.056 0.749,-1.913 1.674,-1.913c0.925,0 1.674,0.857 1.674,1.913c0,1.056 -0.749,1.913 -1.674,1.913zM15.109,14.87c-0.924,0 -1.674,-0.857 -1.674,-1.913c0,-1.056 0.749,-1.913 1.674,-1.913c0.924,0 1.674,0.857 1.674,1.913c0,1.056 -0.75,1.913 -1.674,1.913z"></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-iconColor px-3 py-2 text-xs font-medium rounded-full shadow-lg border-none TooltipContent"
                >
                  <div className="flex items-center space-x-2 text-zinc-950">
                    
                    <p>connect to sushilz16</p>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <div className="invisible absolute h-10 w-5 mt-1 ml-12 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"></div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="w-10 h-10 text-iconColor" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-iconColor px-3 py-2 text-xs font-medium rounded-full shadow-lg border-none TooltipContent"
                >
                  <div className="flex items-center space-x-2 text-zinc-950 ">
                    <p>Send me an email</p>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <div className="invisible absolute h-10 w-5 mt-1 ml-10 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"></div>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          <p className="text-[12px] sm:text-sm text-muted-foreground py-5">
           {"< "} © 2024 Aspirant OP. {" />"}
          </p>
        </div>

     
    </footer>
  );
}
