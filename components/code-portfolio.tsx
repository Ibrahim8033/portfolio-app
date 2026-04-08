"use client"

import Image from "next/image"

export function CodePortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#c9c9c9] font-mono text-[11px] sm:text-[12px] md:text-[13px] leading-[1.6] p-3 sm:p-4 md:p-6 lg:p-8 selection:bg-[#333] selection:text-[#e0e0e0] overflow-x-hidden"
      style={{
        background: "linear-gradient(165deg, #0a0a0a 0%, #111115 30%, #0d0d11 60%, #08080c 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-6 md:gap-8">
          
          {/* ==================== LEFT SIDEBAR ==================== */}
          <div className="space-y-6">
            
            {/* Profile Image with <img> tag */}
            <div>
              <span className="text-[#555]">&lt;img&gt;</span>
              <div className="mt-1 border border-[#2a2a2e] rounded overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.03)] w-full max-w-[250px]">
                <Image
                  src="/Logo.png"
                  alt="Ibrahim Khan"
                  width={200}
                  height={200}
                  loading="eager"
                  priority
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
              <span className="text-[#555]">&lt;\img&gt;</span>
            </div>

            {/* ENUMS GRID ON MOBILE, SINGLE COLUMN ON DESKTOP */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4 gap-y-6">
              
              {/* PLATFORMS */}
              <div>
                <div>
                  <span className="text-[#c586c0]">public enum </span>
                  <span className="text-[#dcdcaa] break-words">PLATFORMS</span>
                  <span className="text-[#c9c9c9]">()</span>
                </div>
                <div className="text-[#555]">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-0.5">
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
                  <span className="text-[#dcdcaa] break-words">LANGUAGES</span>
                  <span className="text-[#c9c9c9]">()</span>
                </div>
                <div className="text-[#555]">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-0.5 text-[10px] sm:text-[11px] md:text-[12px]">
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
                  <span className="text-[#dcdcaa] break-words">SOFTWARE</span>
                  <span className="text-[#c9c9c9]">()</span>
                </div>
                <div className="text-[#555]">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-0.5 text-[10px] sm:text-[11px] md:text-[12px]">
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
                  <span className="text-[#dcdcaa] break-words">MEDIA</span>
                  <span className="text-[#c9c9c9]">()</span>
                </div>
                <div className="text-[#555]">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-0.5 text-[10px] sm:text-[11px] md:text-[12px] break-words">
                  <div>
                    <a href="https://itch.io" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                      <span className="text-[#6a9955]">itch.io,</span>
                    </a>
                  </div>
                  <div className="text-[#555]">//neverdieu.itch.io/</div>
                  <div className="mt-1">
                    <a href="https://linkedin.com/in/julian-klimowicz" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                      <span className="text-[#6a9955]">LinkedIn,</span>
                    </a>
                  </div>
                  <div className="text-[#555] break-all">//in/julian-klimowicz</div>
                  <div className="mt-1">
                    <a href="https://github.com/NeverDieu" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                      <span className="text-[#6a9955]">GitHub</span>
                    </a>
                  </div>
                  <div className="text-[#555] break-all">//github.com/NeverDieu</div>
                </div>
                <div className="text-[#555]">{'}'}</div>
              </div>

              {/* SPOKEN LANGUAGES */}
              <div>
                <div>
                  <span className="text-[#c586c0]">public enum </span>
                  <span className="text-[#dcdcaa] break-all sm:break-words">SPOKEN_LANGUAGES</span>
                  <span className="text-[#c9c9c9]">()</span>
                </div>
                <div className="text-[#555]">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-0.5 text-[10px] sm:text-[11px] md:text-[12px]">
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
                  <span className="text-[#dcdcaa] break-words">PROFILE</span>
                  <span className="text-[#c9c9c9]">()</span>
                </div>
                <div className="text-[#555]">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-0.5 text-[10px] sm:text-[11px] md:text-[12px]">
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
          </div>

          {/* ==================== RIGHT CONTENT ==================== */}
          <div className="space-y-6 pt-4 md:pt-0">

            {/* Summary comment block */}
            <div className="space-y-0 pr-2 lg:pr-0">
              <div><span className="text-[#555] break-words">/// &lt;summary&gt;</span></div>
              <div><span className="text-[#555] break-words">/// Looking for a work-study position in C# programming on Unity3D</span></div>
              <div><span className="text-[#555] break-words">/// or in C++ on Unreal Engine. For a duration of 2 years.</span></div>
              <div><span className="text-[#555] break-words">/// 4 days company, 1 day school. Available IMMEDIATELY.</span></div>
              <div><span className="text-[#555] break-words">/// &lt;\summary&gt;</span></div>
            </div>

            {/* ===== INFORMATION CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#c586c0]">public class </span>
                <span className="text-[#dcdcaa] text-[15px] sm:text-lg font-bold">INFORMATION</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-3 sm:ml-4 md:ml-6 space-y-1">
                <div className="flex flex-wrap items-center">
                  <span className="text-[#c586c0] mr-1.5">public string </span>
                  <span className="text-[#9cdcfe] mr-1.5">NAME</span>
                  <span className="text-[#c9c9c9] mr-1.5"> = </span>
                  <span className="text-[#ce9178]">&quot;MD IBRAHIM KHAN&quot;</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center">
                  <span className="text-[#c586c0] mr-1.5">public string </span>
                  <span className="text-[#9cdcfe] mr-1.5">TITLE</span>
                  <span className="text-[#c9c9c9] mr-1.5"> = </span>
                  <span className="text-[#ce9178]">&quot;FullStack Developer&quot;</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center">
                  <span className="text-[#c586c0] mr-1.5">public string </span>
                  <span className="text-[#9cdcfe] mr-1.5">EMAIL</span>
                  <span className="text-[#c9c9c9] mr-1.5"> = </span>
                  <span className="text-[#ce9178] break-all sm:break-normal">&quot;ibrahimdbg369@gmail.com&quot;</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center">
                  <span className="text-[#c586c0] mr-1.5">public int </span>
                  <span className="text-[#9cdcfe] mr-1.5">PHONE</span>
                  <span className="text-[#c9c9c9] mr-1.5"> = </span>
                  <span className="text-[#b5cea8]">93263 05970</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center">
                  <span className="text-[#c586c0] mr-1.5">public string[] </span>
                  <span className="text-[#9cdcfe] mr-1.5">LOCATION</span>
                  <span className="text-[#c9c9c9] mr-1.5"> = </span>
                  <span className="text-[#c9c9c9] mr-1.5">{'{'}</span>
                  <span className="text-[#ce9178]">&quot;New Delhi&quot;</span>
                  <span className="text-[#c9c9c9]">,</span>
                  <span className="text-[#ce9178] ml-1.5">&quot;110086&quot;</span>
                  <span className="text-[#c9c9c9]">,</span>
                </div>
                <div className="ml-4 sm:ml-8 md:ml-12 flex flex-wrap items-center">
                  <span className="text-[#ce9178]">&quot;Seine-et-Marne&quot;</span>
                  <span className="text-[#c9c9c9]">,</span>
                  <span className="text-[#ce9178] ml-1.5">&quot;Île-de-France&quot;</span>
                  <span className="text-[#c9c9c9]">{'}'}</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
                
                <div className="mt-1 flex flex-wrap items-center">
                  <span className="text-[#c586c0] mr-1.5">public int </span>
                  <span className="text-[#9cdcfe] mr-1.5">AGE</span>
                  <span className="text-[#c9c9c9] mr-1.5"> = </span>
                  <span className="text-[#b5cea8]">21</span>
                  <span className="text-[#c9c9c9]">;</span>
                </div>
              </div>
              <div className="text-[#555]">{'}'}</div>
            </div>

            {/* ===== EDUCATION CLASS ===== */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center">
                <span className="text-[#c586c0] mr-1.5">public partial class </span>
                <span className="text-[#dcdcaa] text-[15px] sm:text-lg font-bold mr-1.5">EDUCATION</span>
                <span className="text-[#c9c9c9] mr-1.5"> : </span>
                <span className="text-[#4ec9b0] text-[15px] sm:text-lg font-bold underline">Btech</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-3 sm:ml-4 md:ml-6 space-y-4">
                
                {/* YnovConnect */}
                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="text-[#c586c0] mr-1.5">private void </span>
                    <span className="text-[#dcdcaa]">YnovConnect</span>
                    <span className="text-[#c9c9c9]">()</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-3 sm:ml-4 md:ml-6 space-y-0.5">
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Level</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#4ec9b0]">Masters</span>
                      <span className="text-[#c9c9c9]">;</span>
                      <span className="text-[#555] ml-2 text-[10px] sm:text-inherit"> // For a duration of 2 years</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Date</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#4ec9b0]">Present</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Type</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
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
                  <div className="flex flex-wrap items-center">
                    <span className="text-[#c586c0] mr-1.5">private void </span>
                    <span className="text-[#dcdcaa]">ICAN</span>
                    <span className="text-[#c9c9c9]">(</span>
                    <span className="text-[#569cd6]">string[]</span>
                    <span className="text-[#c9c9c9]"> _Degrees)</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-3 sm:ml-4 md:ml-6 space-y-0.5">
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Level</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#4ec9b0]">Bachelor</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Date</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#4ec9b0]">Range</span>
                      <span className="text-[#c9c9c9]">(start: </span>
                      <span className="text-[#ce9178]">October 2021</span>
                      <span className="text-[#c9c9c9]">, end: </span>
                      <span className="text-[#ce9178] ml-1.5">June 2024</span>
                      <span className="text-[#c9c9c9]">);</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Type</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#4ec9b0]">Game</span>
                      <span className="text-[#c9c9c9]">.</span>
                      <span className="text-[#dcdcaa]">Design</span>
                      <span className="text-[#c9c9c9]">();</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c9c9c9] mr-1.5">_Degrees = {'{'}</span>
                      <span className="text-[#ce9178]">&quot;Game Design&quot;</span>
                      <span className="text-[#c9c9c9]">,</span>
                      <span className="text-[#ce9178] ml-1.5">&quot;Digital Designer&quot;</span>
                      <span className="text-[#c9c9c9]">{'}'}</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Graduation</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
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
                <span className="text-[#dcdcaa] text-[15px] sm:text-lg font-bold">EXPERIENCE</span>
              </div>
              <div className="text-[#555]">{'{'}</div>
              <div className="ml-3 sm:ml-4 md:ml-6 space-y-5">

                {/* StudioPREMA */}
                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="text-[#c586c0] mr-1.5">public void </span>
                    <span className="text-[#dcdcaa]">StudioPREMA</span>
                    <span className="text-[#c9c9c9]">()</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-3 sm:ml-4 md:ml-6 space-y-0.5">
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Duration</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#4ec9b0]">Range</span>
                      <span className="text-[#c9c9c9]">(start: </span>
                      <span className="text-[#ce9178]">September 2024</span>
                      <span className="text-[#c9c9c9]">, end: </span>
                      <span className="text-[#ce9178] ml-1.5">November 2024</span>
                      <span className="text-[#c9c9c9]">);</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Link</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#ce9178] break-all sm:break-words">&quot;https://afjv.com/societe/1330-studio-prema.htm&quot;</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Type</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#c586c0] mr-1.5">new </span>
                      <span className="text-[#4ec9b0]">Internship</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="mt-2 text-[#555] break-words pr-2 leading-relaxed">
                      /*StudioPREMA is a small PC video game studio founded by
                      Arthur DEFOIN, working on Eplitz — a competitive MOBA inspired by
                      League of Legends and Dota. Built with Unity 6. During this internship
                      I was part of a development team. My tasks included creating
                      character abilities and importing various 3D assets,
                      animations and VFX in collaboration with the Game Artists.*/
                    </div>
                  </div>
                  <div className="text-[#555]">{'}'}</div>
                </div>

                {/* LeDouzisme */}
                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="text-[#c586c0] mr-1.5">public void </span>
                    <span className="text-[#dcdcaa]">LeDouzisme</span>
                    <span className="text-[#c9c9c9]">()</span>
                  </div>
                  <div className="text-[#555]">{'{'}</div>
                  <div className="ml-3 sm:ml-4 md:ml-6 space-y-0.5">
                    <div className="flex flex-wrap items-center">
                      <span className="text-[#c586c0] mr-1.5">var </span>
                      <span className="text-[#c9c9c9] mr-1.5">_Type</span>
                      <span className="text-[#c9c9c9] mr-1.5"> = </span>
                      <span className="text-[#c586c0] mr-1.5">new </span>
                      <span className="text-[#4ec9b0]">Association</span>
                      <span className="text-[#c9c9c9]">;</span>
                    </div>
                    <div className="mt-2 text-[#555] break-words pr-2 leading-relaxed">
                      /*Le Douzisme is an association I co-founded with friends,
                      with the goal of creating PC video games across multiple
                      genres — games we genuinely enjoy making. Our first project is a
                      survivor game serving as a technical demo for a more ambitious
                      "rogue lite-elite RPG" with co-op. We are a small team of 3 people
                      working on this project whenever we find the time, with the
                      ambition to turn our association into a company/studio once the
                      survivor is a success. We develop on the Unity game engine.*/
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
