'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export function CodePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-slate-100 font-mono p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="border-2 border-cyan-500 p-1 rounded-lg overflow-hidden">
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
              <span className="text-cyan-400">public enum</span> <span className="text-yellow-300">PLATFORMES</span>
              <span className="text-slate-400">()</span>
              <div className="ml-4 mt-2">
                <span className="text-slate-400">{'{'}</span>
                <div className="ml-4 space-y-1">
                  <div><span className="text-slate-300">Windows,</span></div>
                  <div><span className="text-slate-300">Linux,</span></div>
                  <div><span className="text-slate-300">macOS</span></div>
                </div>
                <span className="text-slate-400">{'}'}</span>
              </div>
            </div>

            {/* Langages */}
            <div>
              <span className="text-cyan-400">public enum</span> <span className="text-yellow-300">LANGAGES</span>
              <span className="text-slate-400">()</span>
              <div className="ml-4 mt-2">
                <span className="text-slate-400">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-slate-300">TypeScript, JavaScript,</span></div>
                  <div><span className="text-slate-300">Python, C#, Java,</span></div>
                  <div><span className="text-slate-300">HTML5, CSS, SQL</span></div>
                </div>
                <span className="text-slate-400">{'}'}</span>
              </div>
            </div>

            {/* Logiciels */}
            <div>
              <span className="text-cyan-400">public enum</span> <span className="text-yellow-300">LOGICIELS</span>
              <span className="text-slate-400">()</span>
              <div className="ml-4 mt-2">
                <span className="text-slate-400">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-slate-300">VS Code, GitHub,</span></div>
                  <div><span className="text-slate-300">Figma, Vercel,</span></div>
                  <div><span className="text-slate-300">Docker, Git,</span></div>
                  <div><span className="text-slate-300">ChatGPT, Notion</span></div>
                </div>
                <span className="text-slate-400">{'}'}</span>
              </div>
            </div>

            {/* Media */}
            <div>
              <span className="text-cyan-400">public enum</span> <span className="text-yellow-300">MEDIA</span>
              <span className="text-slate-400">()</span>
              <div className="ml-4 mt-2">
                <span className="text-slate-400">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-slate-300">itch.io,</span></div>
                  <div><span className="text-slate-300">LinkedIn,</span></div>
                  <div><span className="text-slate-300">GitHub</span></div>
                </div>
                <span className="text-slate-400">{'}'}</span>
              </div>
            </div>

            {/* Langues */}
            <div>
              <span className="text-cyan-400">public enum</span> <span className="text-yellow-300">LANGUES</span>
              <span className="text-slate-400">()</span>
              <div className="ml-4 mt-2">
                <span className="text-slate-400">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-slate-300">ENGLISH</span>
                    <span className="text-slate-500"> = C1,</span>
                  </div>
                  <div>
                    <span className="text-slate-300">URDU</span>
                    <span className="text-slate-500"> = Native</span>
                  </div>
                </div>
                <span className="text-slate-400">{'}'}</span>
              </div>
            </div>

            {/* Profilo */}
            <div>
              <span className="text-cyan-400">public enum</span> <span className="text-yellow-300">PROFILO</span>
              <span className="text-slate-400">()</span>
              <div className="ml-4 mt-2">
                <span className="text-slate-400">{'{'}</span>
                <div className="ml-4 space-y-1 text-sm">
                  <div><span className="text-slate-300">CREATIVE,</span></div>
                  <div><span className="text-slate-300">INNOVATIVE,</span></div>
                  <div><span className="text-slate-300">DEDICATED,</span></div>
                  <div><span className="text-slate-300">METICULOUS,</span></div>
                  <div><span className="text-slate-300">SOCIAL</span></div>
                </div>
                <span className="text-slate-400">{'}'}</span>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-2 space-y-12 overflow-y-auto max-h-screen pr-4">
            {/* Information Class */}
            <div>
              <div>
                <span className="text-slate-500">/// &lt;summary&gt;</span>
              </div>
              <div>
                <span className="text-slate-500">/// Detailed personal information</span>
              </div>
              <div>
                <span className="text-slate-500">/// &lt;/summary&gt;</span>
              </div>
              <div className="mt-2">
                <span className="text-cyan-400">public class</span> <span className="text-yellow-300">INFORMATION</span>
              </div>
              <div className="text-slate-400">{'{'}</div>

              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-cyan-400">public string</span> <span className="text-yellow-300">NAME</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">"Ibrahim Khan"</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div>
                  <span className="text-cyan-400">public string</span> <span className="text-yellow-300">TITLE</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">"Full-Stack Developer & AI Enthusiast"</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div>
                  <span className="text-cyan-400">public string</span> <span className="text-yellow-300">EMAIL</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">"ibrahim@example.com"</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div>
                  <span className="text-cyan-400">public string</span> <span className="text-yellow-300">PHONE</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">"+92 300 1234567"</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div>
                  <span className="text-cyan-400">public string</span> <span className="text-yellow-300">POSITION</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">"Computer Science Student"</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div>
                  <span className="text-cyan-400">public int</span> <span className="text-yellow-300">AGE</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">21</span>
                  <span className="text-slate-400">;</span>
                </div>

                <div>
                  <span className="text-cyan-400">public string</span> <span className="text-yellow-300">LOCATION</span>
                  <span className="text-slate-400"> = </span>
                  <span className="text-green-400">"Pakistan"</span>
                  <span className="text-slate-400">;</span>
                </div>
              </div>

              <div className="text-slate-400">{'}'}</div>
            </div>

            {/* Formations */}
            <div>
              <div>
                <span className="text-slate-500">/// &lt;summary&gt;</span>
              </div>
              <div>
                <span className="text-slate-500">/// Academic education</span>
              </div>
              <div>
                <span className="text-slate-500">/// &lt;/summary&gt;</span>
              </div>
              <div className="mt-2">
                <span className="text-cyan-400">public partial class</span> <span className="text-yellow-300">FORMATIONS</span>
                <span className="text-slate-400"> : </span>
                <span className="text-cyan-400">HigherEducation</span>
              </div>
              <div className="text-slate-400">{'{'}</div>

              <div className="ml-4 space-y-4">
                <div>
                  <span className="text-cyan-400">private void</span> <span className="text-yellow-300">Bachelor</span>
                  <span className="text-slate-400">()</span>
                </div>
                <div className="text-slate-400">{'{'}</div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-cyan-400">var</span> <span className="text-slate-300">_University</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-cyan-400">FAST</span>
                    <span className="text-slate-400">;</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">var</span> <span className="text-slate-300">_Date</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-cyan-400">Range</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-green-400">start</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-cyan-400">2022</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-green-400">end</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-cyan-400">2026</span>
                    <span className="text-slate-400">);</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">var</span> <span className="text-slate-300">_Program</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-green-400">"Computer Science"</span>
                    <span className="text-slate-400">;</span>
                  </div>
                </div>
                <div className="text-slate-400">{'}'}</div>
              </div>

              <div className="text-slate-400">{'}'}</div>
            </div>

            {/* Experiences */}
            <div>
              <div>
                <span className="text-slate-500">/// &lt;summary&gt;</span>
              </div>
              <div>
                <span className="text-slate-500">/// Professional experience and projects</span>
              </div>
              <div>
                <span className="text-slate-500">/// &lt;/summary&gt;</span>
              </div>
              <div className="mt-2">
                <span className="text-cyan-400">public static class</span> <span className="text-yellow-300">EXPERIENCES</span>
              </div>
              <div className="text-slate-400">{'{'}</div>

              <div className="ml-4 space-y-4">
                <div>
                  <span className="text-cyan-400">public void</span> <span className="text-yellow-300">ProjectOne</span>
                  <span className="text-slate-400">()</span>
                </div>
                <div className="text-slate-400">{'{'}</div>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-slate-300">/*</span>
                  </div>
                  <div>
                    <span className="text-slate-500">AI Code Assistant - VS Code Extension</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Powered by GPT-4 for intelligent code suggestions</span>
                  </div>
                  <div>
                    <span className="text-slate-300">*/</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">var</span> <span className="text-slate-300">_Type</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-cyan-400">new</span> <span className="text-yellow-300">Project</span>
                    <span className="text-slate-400">();</span>
                  </div>
                </div>
                <div className="text-slate-400">{'}'}</div>

                <div>
                  <span className="text-cyan-400">public void</span> <span className="text-yellow-300">ProjectTwo</span>
                  <span className="text-slate-400">()</span>
                </div>
                <div className="text-slate-400">{'{'}</div>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-slate-300">/*</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Neural Style Transfer Web App</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Deep learning for real-time artistic style application</span>
                  </div>
                  <div>
                    <span className="text-slate-300">*/</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">var</span> <span className="text-slate-300">_Type</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-cyan-400">new</span> <span className="text-yellow-300">Project</span>
                    <span className="text-slate-400">();</span>
                  </div>
                </div>
                <div className="text-slate-400">{'}'}</div>

                <div>
                  <span className="text-cyan-400">public void</span> <span className="text-yellow-300">ProjectThree</span>
                  <span className="text-slate-400">()</span>
                </div>
                <div className="text-slate-400">{'{'}</div>
                <div className="ml-4 space-y-1 text-sm">
                  <div>
                    <span className="text-slate-300">/*</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Smart Campus Navigator - AR Mobile App</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Won 1st place at University Hackathon 2024</span>
                  </div>
                  <div>
                    <span className="text-slate-300">*/</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">var</span> <span className="text-slate-300">_Type</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-cyan-400">new</span> <span className="text-yellow-300">Project</span>
                    <span className="text-slate-400">();</span>
                  </div>
                </div>
                <div className="text-slate-400">{'}'}</div>
              </div>

              <div className="text-slate-400">{'}'}</div>
            </div>

            {/* Footer Links */}
            <div className="pt-8 border-t border-slate-700">
              <div className="text-slate-500 text-sm mb-4">
                <span className="text-slate-500">// Connect with me</span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:ibrahim@example.com"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
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
