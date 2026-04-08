"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function CodePortfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="border-2 border-orange-500 p-1 rounded-lg overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Ibrahim Khan"
                  width={200}
                  height={200}
                  loading="eager"
                  priority
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Platformes */}
            <div>
              <span className="text-red-400">public enum</span> <span className="text-orange-400">PLATFORMES</span>
              <span className="text-gray-500">()</span>
              <div className="ml-4 mt-2">
                <span className="text-gray-500">{'{'}</span>
                <div className="ml-4 space-y-1">
                  <div><span className="text-green-400">Windows,</span></div>
                  <div><span className="text-green-400">Linux,</span></div>
                  <div><span className="text-green-400">macOS</span></div>
                </div>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>

            {/* Langages */}
            <div>
              <span className="text-red-400">public enum</span> <span className="text-orange-400">LANGAGES</span>
              <span className="text-gray-500">()</span>
              <div className="ml-4 mt-2">
                <span className="text-gray-500">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-green-400">TypeScript, JavaScript,</span></div>
                  <div><span className="text-green-400">Python, C#, Java,</span></div>
                  <div><span className="text-green-400">HTML5, CSS, SQL</span></div>
                </div>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>

            {/* Logiciels */}
            <div>
              <span className="text-red-400">public enum</span> <span className="text-orange-400">LOGICIELS</span>
              <span className="text-gray-500">()</span>
              <div className="ml-4 mt-2">
                <span className="text-gray-500">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-green-400">VS Code, GitHub,</span></div>
                  <div><span className="text-green-400">Figma, Vercel,</span></div>
                  <div><span className="text-green-400">Docker, Git,</span></div>
                  <div><span className="text-green-400">ChatGPT, Notion</span></div>
                </div>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>

            {/* Media */}
            <div>
              <span className="text-red-400">public enum</span> <span className="text-orange-400">MEDIA</span>
              <span className="text-gray-500">()</span>
              <div className="ml-4 mt-2">
                <span className="text-gray-500">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-green-400">itch.io,</span></div>
                  <div><span className="text-green-400">LinkedIn,</span></div>
                  <div><span className="text-green-400">GitHub</span></div>
                </div>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>

            {/* Langues */}
            <div>
              <span className="text-red-400">public enum</span> <span className="text-orange-400">LANGUES</span>
              <span className="text-gray-500">()</span>
              <div className="ml-4 mt-2">
                <span className="text-gray-500">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">ENGLISH</span>
                    <span className="text-gray-600"> = C1,</span>
                  </div>
                  <div>
                    <span className="text-green-400">URDU</span>
                    <span className="text-gray-600"> = Native</span>
                  </div>
                </div>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>

            {/* Profilo */}
            <div>
              <span className="text-red-400">public enum</span> <span className="text-orange-400">PROFILO</span>
              <span className="text-gray-500">()</span>
              <div className="ml-4 mt-2">
                <span className="text-gray-500">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-green-400">CREATIVE,</span></div>
                  <div><span className="text-green-400">INNOVATIVE,</span></div>
                  <div><span className="text-green-400">DEDICATED,</span></div>
                  <div><span className="text-green-400">METICULOUS,</span></div>
                  <div><span className="text-green-400">SOCIAL</span></div>
                </div>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-2 space-y-12 overflow-y-auto max-h-screen pr-4">
            {/* Information Class */}
            <div className="space-y-2">
              <div>
                <span className="text-gray-600">/// &lt;summary&gt;</span>
              </div>
              <div>
                <span className="text-gray-600">/// Detailed personal information</span>
              </div>
              <div>
                <span className="text-gray-600">/// &lt;/summary&gt;</span>
              </div>
              <div className="mt-2">
                <span className="text-red-400">public class</span> <span className="text-orange-400">INFORMATION</span>
              </div>
              <div className="text-gray-500">{'{'}</div>

              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-red-400">public string</span> <span className="text-orange-400">NAME</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">"Ibrahim Khan"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-red-400">public string</span> <span className="text-orange-400">TITLE</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">"Full-Stack Developer & AI Enthusiast"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-red-400">public string</span> <span className="text-orange-400">EMAIL</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">"ibrahim@example.com"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-red-400">public string</span> <span className="text-orange-400">PHONE</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">"+92 300 1234567"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-red-400">public string</span> <span className="text-orange-400">POSITION</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">"Computer Science Student"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-red-400">public int</span> <span className="text-orange-400">AGE</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">21</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-red-400">public string</span> <span className="text-orange-400">LOCATION</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-400">"Pakistan"</span>
                  <span className="text-gray-500">;</span>
                </div>
              </div>

              <div className="text-gray-500">{'}'}</div>
            </div>

            {/* Formations */}
            <div className="space-y-2">
              <div>
                <span className="text-gray-600">/// &lt;summary&gt;</span>
              </div>
              <div>
                <span className="text-gray-600">/// Academic education</span>
              </div>
              <div>
                <span className="text-gray-600">/// &lt;/summary&gt;</span>
              </div>
              <div className="mt-2">
                <span className="text-red-400">public partial class</span> <span className="text-orange-400">FORMATIONS</span>
                <span className="text-gray-500"> : </span>
                <span className="text-red-400">HigherEducation</span>
              </div>
              <div className="text-gray-500">{'{'}</div>

              <div className="ml-4 space-y-4">
                <div>
                  <span className="text-red-400">private void</span> <span className="text-orange-400">Bachelor</span>
                  <span className="text-gray-500">()</span>
                </div>
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-red-400">var</span> <span className="text-gray-300">_University</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-red-400">FAST</span>
                    <span className="text-gray-500">;</span>
                  </div>
                  <div>
                    <span className="text-red-400">var</span> <span className="text-gray-300">_Date</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-red-400">Range</span>
                    <span className="text-gray-500">(</span>
                    <span className="text-green-400">start</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-blue-400">2022</span>
                    <span className="text-gray-500">, </span>
                    <span className="text-green-400">end</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-blue-400">2026</span>
                    <span className="text-gray-500">);</span>
                  </div>
                  <div>
                    <span className="text-red-400">var</span> <span className="text-gray-300">_Program</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-green-400">"Computer Science"</span>
                    <span className="text-gray-500">;</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>

              <div className="text-gray-500">{'}'}</div>
            </div>

            {/* Experiences */}
            <div className="space-y-2">
              <div>
                <span className="text-gray-600">/// &lt;summary&gt;</span>
              </div>
              <div>
                <span className="text-gray-600">/// Professional experience and projects</span>
              </div>
              <div>
                <span className="text-gray-600">/// &lt;/summary&gt;</span>
              </div>
              <div className="mt-2">
                <span className="text-red-400">public static class</span> <span className="text-orange-400">EXPERIENCES</span>
              </div>
              <div className="text-gray-500">{'{'}</div>

              <div className="ml-4 space-y-4">
                <div>
                  <span className="text-red-400">public void</span> <span className="text-orange-400">ProjectOne</span>
                  <span className="text-gray-500">()</span>
                </div>
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-gray-600">/*</span>
                  </div>
                  <div>
                    <span className="text-gray-600">AI Code Assistant - VS Code Extension</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Powered by GPT-4 for intelligent code suggestions</span>
                  </div>
                  <div>
                    <span className="text-gray-600">*/</span>
                  </div>
                  <div>
                    <span className="text-red-400">var</span> <span className="text-gray-300">_Type</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-red-400">new</span> <span className="text-orange-400">Project</span>
                    <span className="text-gray-500">();</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>

                <div>
                  <span className="text-red-400">public void</span> <span className="text-orange-400">ProjectTwo</span>
                  <span className="text-gray-500">()</span>
                </div>
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-gray-600">/*</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Neural Style Transfer Web App</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Deep learning for real-time artistic style application</span>
                  </div>
                  <div>
                    <span className="text-gray-600">*/</span>
                  </div>
                  <div>
                    <span className="text-red-400">var</span> <span className="text-gray-300">_Type</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-red-400">new</span> <span className="text-orange-400">Project</span>
                    <span className="text-gray-500">();</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>

                <div>
                  <span className="text-red-400">public void</span> <span className="text-orange-400">ProjectThree</span>
                  <span className="text-gray-500">()</span>
                </div>
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-gray-600">/*</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Smart Campus Navigator - AR Mobile App</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Won 1st place at University Hackathon 2024</span>
                  </div>
                  <div>
                    <span className="text-gray-600">*/</span>
                  </div>
                  <div>
                    <span className="text-red-400">var</span> <span className="text-gray-300">_Type</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-red-400">new</span> <span className="text-orange-400">Project</span>
                    <span className="text-gray-500">();</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>

              <div className="text-gray-500">{'}'}</div>
            </div>

            {/* Footer Links */}
            <div className="pt-8 border-t border-gray-700">
              <div className="text-gray-600 text-sm mb-4">
                <span className="text-gray-600">// Connect with me</span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:ibrahim@example.com"
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Mail size={20} />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
