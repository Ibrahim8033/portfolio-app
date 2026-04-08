"use client"

import Image from "next/image"

export function CodePortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#c9c9c9] font-mono text-[13px] leading-[1.6] p-4 md:p-6 lg:p-8 selection:bg-[#333] selection:text-[#e0e0e0]"
      style={{
        background: "linear-gradient(165deg, #0a0a0a 0%, #111115 30%, #0d0d11 60%, #08080c 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-4 md:gap-6">
          
          {/* ==================== LEFT SIDEBAR ==================== */}
          <div className="space-y-4">
            
            {/* Profile Image with <img> tag */}
            <div>
              <span className="text-[#555]">&lt;img&gt;</span>
              <div className="mt-1 border border-[#2a2a2e] rounded overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                <Image
                  src="/Logo.png"
                  alt="Ibrahim Khan"
                  width={200}
                  height={200}
                  loading="eager"
                  priority
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
              <span className="text-[#555]">&lt;\img&gt;</span>
            </div>

            {/* PLATFORMS */}
            <div>
              <div>
                <span className="text-[#c586c0]">public enum </span>
                <span className="text-[#dcdcaa]">PLATFORMS</span>
                <span className="text-[#c9c9c9]">()</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-4 space-y-0.5">
                <div><span className="text-[#6a9955]">Windows,</span></div>
                <div><span className="text-[#6a9955]">Linux,</span></div>
                <div><span className="text-[#6a9955]">Mobile</span></div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* LANGUAGES (Programming) */}
            <div>
              <div>
                <span className="text-[#c586c0]">public enum </span>
                <span className="text-[#dcdcaa]">LANGUAGES</span>
                <span className="text-[#c9c9c9]">()</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div><span className="text-[#6a9955]">C#,C++,C,</span></div>
                <div><span className="text-[#6a9955]">Python,Bash,LUA,</span></div>
                <div><span className="text-[#6a9955]">Java,HTML5,CSS,</span></div>
                <div><span className="text-[#6a9955]">JavaScript</span></div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* SOFTWARE */}
            <div>
              <div>
                <span className="text-[#c586c0]">public enum </span>
                <span className="text-[#dcdcaa]">SOFTWARE</span>
                <span className="text-[#c9c9c9]">()</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div><span className="text-[#6a9955]">Unity3D,</span></div>
                <div><span className="text-[#6a9955]">UnrealEngine,</span></div>
                <div><span className="text-[#6a9955]">Godot4,VisualStudio,</span></div>
                <div><span className="text-[#6a9955]">Jetbrains,PhotoShop,</span></div>
                <div><span className="text-[#6a9955]">GoogleSuite,Blender,</span></div>
                <div><span className="text-[#6a9955]">AdobePremiere,</span></div>
                <div><span className="text-[#6a9955]">AdobeSubstancePainter,</span></div>
                <div><span className="text-[#6a9955]">AdobeSubstance3D</span></div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* MEDIA */}
            <div>
              <div>
                <span className="text-[#c586c0]">public enum </span>
                <span className="text-[#dcdcaa]">MEDIA</span>
                <span className="text-[#c9c9c9]">()</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div>
                  <a href="https://itch.io" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span className="text-[#6a9955]">itch.io,</span>
                  </a>
                </div>
                <div className="text-[#555]">//neverdieu.itch.io/</div>
                <div>
                  <a href="https://linkedin.com/in/julian-klimowicz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span className="text-[#6a9955]">LinkedIn,</span>
                  </a>
                </div>
                <div className="text-[#555]">//in/julian-klimowicz</div>
                <div>
                  <a href="https://github.com/NeverDieu" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span className="text-[#6a9955]">GitHub</span>
                  </a>
                </div>
                <div className="text-[#555]">//github.com/NeverDieu</div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* SPOKEN LANGUAGES */}
            <div>
              <div>
                <span className="text-[#c586c0]">public enum </span>
                <span className="text-[#dcdcaa]">SPOKEN_LANGUAGES</span>
                <span className="text-[#c9c9c9]">()</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div>
                  <span className="text-[#555]">// Native</span>
                </div>
                <div>
                  <span className="text-[#6a9955]">FRENCH</span>
                  <span className="text-[#c9c9c9]"> = C1,</span>
                </div>
                <div>
                  <span className="text-[#555]">// Fluent</span>
                </div>
                <div>
                  <span className="text-[#6a9955]">ENGLISH</span>
                  <span className="text-[#c9c9c9]"> = B2,</span>
                </div>
                <div>
                  <span className="text-[#555]">// Fluent</span>
                </div>
                <div>
                  <span className="text-[#6a9955]">POLISH</span>
                  <span className="text-[#c9c9c9]"> = B2,</span>
                </div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* PROFILE */}
            <div>
              <div>
                <span className="text-[#c586c0]">public enum </span>
                <span className="text-[#dcdcaa]">PROFILE</span>
                <span className="text-[#c9c9c9]">()</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div><span className="text-[#6a9955]">CURIOUS,</span></div>
                <div><span className="text-[#6a9955]">PUNCTUAL,</span></div>
                <div><span className="text-[#6a9955]">RIGOROUS,</span></div>
                <div><span className="text-[#6a9955]">METICULOUS,</span></div>
                <div><span className="text-[#6a9955]">EMPATHETIC,</span></div>
                <div><span className="text-[#6a9955]">SOCIAL</span></div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

          </div>

          {/* ==================== RIGHT CONTENT ==================== */}
          <div className="space-y-6">

            {/* Summary comment block */}
            <div className="space-y-0">
              <div><span className="text-[#555]">/// &lt;summary&gt;</span></div>
              <div><span className="text-[#555]">/// Looking for a work-study position in C# programming on Unity3D</span></div>
              <div><span className="text-[#555]">/// or in C++ on Unreal Engine. For a duration of 2 years.</span></div>
              <div><span className="text-[#555]">/// 4 days company, 1 day school. Available IMMEDIATELY.</span></div>
              <div><span className="text-[#555]">/// &lt;\summary&gt;</span></div>
            </div>

            {/* ===== INFORMATION CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#c586c0]">public class </span>
                <span className="text-[#dcdcaa] text-lg font-bold">INFORMATION</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-6 space-y-1">
                <div>
                  <span className="text-[#c586c0]">public string </span>
                  <span className="text-[#9cdcfe]">NAME</span>
                  <span className="text-[#c9c9c9]"> = </span>
                  <span className="text-[#ce9178]">&quot;MD IBRAHIM KHAN&quot;</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#c586c0]">public string </span>
                  <span className="text-[#9cdcfe]">TITLE</span>
                  <span className="text-[#c9c9c9]"> = </span>
                  <span className="text-[#ce9178]">&quot;FullStack Developer&quot;</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#c586c0]">public string </span>
                  <span className="text-[#9cdcfe]">EMAIL</span>
                  <span className="text-[#c9c9c9]"> = </span>
                  <span className="text-[#ce9178]">&quot;ibrahimdbg369@gmail.com&quot;</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#c586c0]">public int </span>
                  <span className="text-[#9cdcfe]">PHONE</span>
                  <span className="text-[#c9c9c9]"> = </span>
                  <span className="text-[#b5cea8]">93263 05970</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#c586c0]">public string[] </span>
                  <span className="text-[#9cdcfe]">LOCATION</span>
                  <span className="text-[#c9c9c9]"> = </span>
                  <span className="text-[#c9c9c9]">{'{'}</span>
                  <span className="text-[#ce9178]">&quot;New Delhi&quot;</span>
                  <span className="text-[#c9c9c9]">,</span>
                  <span className="text-[#ce9178]">&quot;110086&quot;</span>
                  <span className="text-[#c9c9c9]">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-[#ce9178]">&quot;Seine-et-Marne&quot;</span>
                  <span className="text-[#c9c9c9]">,</span>
                  <span className="text-[#ce9178]">&quot;Île-de-France&quot;</span>
                  <span className="text-[#c9c9c9]">{'}'}</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                
                <div className="mt-1">
                  <span className="text-[#c586c0]">public int </span>
                  <span className="text-[#9cdcfe]">AGE</span>
                  <span className="text-[#c9c9c9]"> = </span>
                  <span className="text-[#b5cea8]">21</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* ===== EDUCATION CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#c586c0]">public partial class </span>
                <span className="text-[#dcdcaa] text-lg font-bold">EDUCATION</span>
                <span className="text-[#c9c9c9]"> : </span>
                <span className="text-[#4ec9b0] text-lg font-bold underline">Btech</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-6 space-y-3">
                
                {/* YnovConnect */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#c586c0]">private void </span>
                    <span className="text-[#dcdcaa]">YnovConnect</span>
                    <span className="text-[#c9c9c9]">()</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Level</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">Masters</span>
                      <span className="text-[#c9c9c9]">;</span>
                      <span className="text-[#555]"> // For a duration of 2 years</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Date</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">Present</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Type</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">FullStack</span>
                      <span className="text-[#c9c9c9]">.</span>
                      <span className="text-[#dcdcaa]">Developer</span>
                      <span className="text-[#c9c9c9]">();</span>
                    </div>
                  </div>
                  <div className="text-[#555]">{'}'}</div>
                </div>

                {/* ICAN */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#c586c0]">private void </span>
                    <span className="text-[#dcdcaa]">ICAN</span>
                    <span className="text-[#c9c9c9]">(</span>
                    <span className="text-[#569cd6]">string[]</span>
                    <span className="text-[#c9c9c9]"> _Degrees)</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Level</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">Bachelor</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Date</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">Range</span>
                      <span className="text-[#c9c9c9]">(start: </span>
                      <span className="text-[#ce9178]">October 2021</span>
                      <span className="text-[#c9c9c9]">, end: </span>
                      <span className="text-[#ce9178]">June 2024</span>
                      <span className="text-[#c9c9c9]">);</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Type</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">Game</span>
                      <span className="text-[#c9c9c9]">.</span>
                      <span className="text-[#dcdcaa]">Design</span>
                      <span className="text-[#c9c9c9]">();</span>
                    </div>
                    <div>
                      <span className="text-[#c9c9c9]">_Degrees = {'{'}</span>
                      <span className="text-[#ce9178]">&quot;Game Design&quot;</span>
                      <span className="text-[#c9c9c9]">,</span>
                      <span className="text-[#ce9178]">&quot;Digital Designer&quot;</span>
                      <span className="text-[#c9c9c9]">{'}'}</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Graduation</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#ce9178]">&quot;Saturday June 24, 2025&quot;</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                  </div>
                  <div className="text-[#555]">{'}'}</div>
                </div>

              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* ===== EXPERIENCE CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#c586c0]">public static class </span>
                <span className="text-[#dcdcaa] text-lg font-bold">EXPERIENCE</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-6 space-y-3">

                {/* StudioPREMA */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#c586c0]">public void </span>
                    <span className="text-[#dcdcaa]">StudioPREMA</span>
                    <span className="text-[#c9c9c9]">()</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Duration</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#4ec9b0]">Range</span>
                      <span className="text-[#c9c9c9]">(start: </span>
                      <span className="text-[#ce9178]">September 2024</span>
                      <span className="text-[#c9c9c9]">, end: </span>
                      <span className="text-[#ce9178]">November 2024</span>
                      <span className="text-[#c9c9c9]">);</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Link</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#ce9178]">&quot;https://afjv.com/societe/1330-studio-prema.htm&quot;</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Type</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#c586c0]">new </span>
                      <span className="text-[#4ec9b0]">Internship</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[#555]">/*StudioPREMA is a small PC video game studio founded by</span>
                    </div>
                    <div>
                      <span className="text-[#555]">Arthur DEFOIN, working on Eplitz — a competitive MOBA inspired by</span>
                    </div>
                    <div>
                      <span className="text-[#555]">League of Legends and Dota. Built with Unity 6. During this internship</span>
                    </div>
                    <div>
                      <span className="text-[#555]">I was part of a development team. My tasks included creating</span>
                    </div>
                    <div>
                      <span className="text-[#555]">character abilities and importing various 3D assets,</span>
                    </div>
                    <div>
                      <span className="text-[#555]">animations and VFX in collaboration with the Game Artists.*/</span>
                    </div>
                  </div>
                  <div className="text-[#555]">{'}'}</div>
                </div>

                {/* LeDouzisme */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#c586c0]">public void </span>
                    <span className="text-[#dcdcaa]">LeDouzisme</span>
                    <span className="text-[#c9c9c9]">()</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#c586c0]">var </span>
                      <span className="text-[#c9c9c9]">_Type</span>
                      <span className="text-[#c9c9c9]"> = </span>
                      <span className="text-[#c586c0]">new </span>
                      <span className="text-[#4ec9b0]">Association</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[#555]">/*Le Douzisme is an association I co-founded with friends,</span>
                    </div>
                    <div>
                      <span className="text-[#555]">with the goal of creating PC video games across multiple</span>
                    </div>
                    <div>
                      <span className="text-[#555]">genres — games we genuinely enjoy making. Our first project is a</span>
                    </div>
                    <div>
                      <span className="text-[#555]">survivor game serving as a technical demo for a more ambitious</span>
                    </div>
                    <div>
                      <span className="text-[#555]">&quot;rogue lite-elite RPG&quot; with co-op. We are a small team of 3 people</span>
                    </div>
                    <div>
                      <span className="text-[#555]">working on this project whenever we find the time, with the</span>
                    </div>
                    <div>
                      <span className="text-[#555]">ambition to turn our association into a company/studio once the</span>
                    </div>
                    <div>
                      <span className="text-[#555]">survivor is a success. We develop on the Unity game engine.*/</span>
                    </div>
                  </div>
                  <div className="text-[#555]">{'}'}</div>
                </div>

              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
