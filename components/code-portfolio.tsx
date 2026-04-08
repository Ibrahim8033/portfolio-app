'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export function CodePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-200 to-slate-300 text-slate-800 font-mono p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Content Area */}
        <div className="space-y-12 overflow-y-auto max-h-screen pr-4">
            {/* Information Class */}
            <div>
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
                <span className="text-blue-600">public class</span> <span className="text-amber-700">INFORMATION</span>
              </div>
              <div className="text-gray-500">{'{'}</div>

              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-blue-600">public string</span> <span className="text-amber-700">NAME</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">"Ibrahim Khan"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-blue-600">public string</span> <span className="text-amber-700">TITLE</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">"Full-Stack Developer & AI Enthusiast"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-blue-600">public string</span> <span className="text-amber-700">EMAIL</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">"ibrahim@example.com"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-blue-600">public string</span> <span className="text-amber-700">PHONE</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">"+92 300 1234567"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-blue-600">public string</span> <span className="text-amber-700">POSITION</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">"Computer Science Student"</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-blue-600">public int</span> <span className="text-amber-700">AGE</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">21</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div>
                  <span className="text-blue-600">public string</span> <span className="text-amber-700">LOCATION</span>
                  <span className="text-gray-500"> = </span>
                  <span className="text-green-700">"Pakistan"</span>
                  <span className="text-gray-500">;</span>
                </div>
              </div>

              <div className="text-gray-500">{'}'}</div>
            </div>

            {/* Formations */}
            <div>
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
                <span className="text-blue-600">public partial class</span> <span className="text-amber-700">FORMATIONS</span>
                <span className="text-gray-500"> : </span>
                <span className="text-blue-600">HigherEducation</span>
              </div>
              <div className="text-gray-500">{'{'}</div>

              <div className="ml-4 space-y-4">
                <div>
                  <span className="text-blue-600">private void</span> <span className="text-amber-700">Bachelor</span>
                  <span className="text-gray-500">()</span>
                </div>
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-blue-600">var</span> <span className="text-gray-700">_University</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-blue-600">FAST</span>
                    <span className="text-gray-500">;</span>
                  </div>
                  <div>
                    <span className="text-blue-600">var</span> <span className="text-gray-700">_Date</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-blue-600">Range</span>
                    <span className="text-gray-500">(</span>
                    <span className="text-green-700">start</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-blue-600">2022</span>
                    <span className="text-gray-500">, </span>
                    <span className="text-green-700">end</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-blue-600">2026</span>
                    <span className="text-gray-500">);</span>
                  </div>
                  <div>
                    <span className="text-blue-600">var</span> <span className="text-gray-700">_Program</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-green-700">"Computer Science"</span>
                    <span className="text-gray-500">;</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>

              <div className="text-gray-500">{'}'}</div>
            </div>

            {/* Experiences */}
            <div>
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
                <span className="text-blue-600">public static class</span> <span className="text-amber-700">EXPERIENCES</span>
              </div>
              <div className="text-gray-500">{'{'}</div>

              <div className="ml-4 space-y-4">
                <div>
                  <span className="text-blue-600">public void</span> <span className="text-amber-700">ProjectOne</span>
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
                    <span className="text-blue-600">var</span> <span className="text-gray-700">_Type</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-blue-600">new</span> <span className="text-amber-700">Project</span>
                    <span className="text-gray-500">();</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>

                <div>
                  <span className="text-blue-600">public void</span> <span className="text-amber-700">ProjectTwo</span>
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
                    <span className="text-blue-600">var</span> <span className="text-gray-700">_Type</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-blue-600">new</span> <span className="text-amber-700">Project</span>
                    <span className="text-gray-500">();</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>

                <div>
                  <span className="text-blue-600">public void</span> <span className="text-amber-700">ProjectThree</span>
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
                    <span className="text-blue-600">var</span> <span className="text-gray-700">_Type</span>
                    <span className="text-gray-500"> = </span>
                    <span className="text-blue-600">new</span> <span className="text-amber-700">Project</span>
                    <span className="text-gray-500">();</span>
                  </div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>

              <div className="text-gray-500">{'}'}</div>
            </div>

            {/* Footer Links */}
            <div className="pt-8 border-t border-gray-400">
              <div className="text-gray-600 text-sm mb-4">
                <span className="text-gray-600">// Connect with me</span>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:ibrahim@example.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Mail size={20} />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
