"use client"

import Image from "next/image"

export function CodePortfolio() {
  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4] font-mono text-[13px] leading-[1.6] p-4 md:p-6 lg:p-8 selection:bg-[#45475a] selection:text-[#cdd6f4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-4 md:gap-6">
          
          {/* ==================== LEFT SIDEBAR ==================== */}
          <div className="space-y-4">
            
            {/* Profile Image with <img> tag */}
            <div>
              <span className="text-[#585b70]">&lt;img&gt;</span>
              <div className="mt-1 border border-[#45475a] rounded overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Ibrahim Khan"
                  width={250}
                  height={250}
                  loading="eager"
                  priority
                  className="w-full h-auto"
                />
              </div>
              <span className="text-[#585b70]">&lt;\img&gt;</span>
            </div>

            {/* PLATEFORMES */}
            <div>
              <div>
                <span className="text-[#cba6f7]">public enum </span>
                <span className="text-[#f9e2af]">PLATEFORMES</span>
                <span className="text-[#cdd6f4]">()</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-4 space-y-0.5">
                <div><span className="text-[#a6e3a1]">Windows,</span></div>
                <div><span className="text-[#a6e3a1]">Linux,</span></div>
                <div><span className="text-[#a6e3a1]">Mobile</span></div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* LANGAGES */}
            <div>
              <div>
                <span className="text-[#cba6f7]">public enum </span>
                <span className="text-[#f9e2af]">LANGAGES</span>
                <span className="text-[#cdd6f4]">()</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div><span className="text-[#a6e3a1]">C#,C++,C,</span></div>
                <div><span className="text-[#a6e3a1]">Python,Bash,LUA,</span></div>
                <div><span className="text-[#a6e3a1]">Java,HTML5,CSS,</span></div>
                <div><span className="text-[#a6e3a1]">JavaScript</span></div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* LOGICIELS */}
            <div>
              <div>
                <span className="text-[#cba6f7]">public enum </span>
                <span className="text-[#f9e2af]">LOGICIELS</span>
                <span className="text-[#cdd6f4]">()</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div><span className="text-[#a6e3a1]">Unity3D,</span></div>
                <div><span className="text-[#a6e3a1]">UnrealEngine,</span></div>
                <div><span className="text-[#a6e3a1]">Godot4,VisualStudio,</span></div>
                <div><span className="text-[#a6e3a1]">Jetbrains,PhotoShop,</span></div>
                <div><span className="text-[#a6e3a1]">GoogleSuite,Blender,</span></div>
                <div><span className="text-[#a6e3a1]">AdobePremier,</span></div>
                <div><span className="text-[#a6e3a1]">AdobeSubstancePainter,</span></div>
                <div><span className="text-[#a6e3a1]">AdobeSubstance3D</span></div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* MÉDIA */}
            <div>
              <div>
                <span className="text-[#cba6f7]">public enum </span>
                <span className="text-[#f9e2af]">MÉDIA</span>
                <span className="text-[#cdd6f4]">()</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div>
                  <a href="https://itch.io" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span className="text-[#a6e3a1]">itch.io,</span>
                  </a>
                </div>
                <div className="text-[#6c7086]">//neverdieu.itch.io/</div>
                <div>
                  <a href="https://linkedin.com/in/julian-klimowicz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span className="text-[#a6e3a1]">LinkedIn,</span>
                  </a>
                </div>
                <div className="text-[#6c7086]">//in/julian-klimowicz</div>
                <div>
                  <a href="https://github.com/NeverDieu" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span className="text-[#a6e3a1]">GitHub</span>
                  </a>
                </div>
                <div className="text-[#6c7086]">//github.com/NeverDieu</div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* LANGUES */}
            <div>
              <div>
                <span className="text-[#cba6f7]">public enum </span>
                <span className="text-[#f9e2af]">LANGUES</span>
                <span className="text-[#cdd6f4]">()</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div>
                  <span className="text-[#6c7086]">// Native</span>
                </div>
                <div>
                  <span className="text-[#a6e3a1]">FRANÇAIS</span>
                  <span className="text-[#cdd6f4]"> = C1,</span>
                </div>
                <div>
                  <span className="text-[#6c7086]">// Fluide</span>
                </div>
                <div>
                  <span className="text-[#a6e3a1]">ANGLAIS</span>
                  <span className="text-[#cdd6f4]"> = B2,</span>
                </div>
                <div>
                  <span className="text-[#6c7086]">// Fluide</span>
                </div>
                <div>
                  <span className="text-[#a6e3a1]">POLONAIS</span>
                  <span className="text-[#cdd6f4]"> = B2,</span>
                </div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* PROFIL */}
            <div>
              <div>
                <span className="text-[#cba6f7]">public enum </span>
                <span className="text-[#f9e2af]">PROFIL</span>
                <span className="text-[#cdd6f4]">()</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-4 space-y-0.5 text-[12px]">
                <div><span className="text-[#a6e3a1]">CURIEUX,</span></div>
                <div><span className="text-[#a6e3a1]">PONCTUEL,</span></div>
                <div><span className="text-[#a6e3a1]">RIGOUREUX,</span></div>
                <div><span className="text-[#a6e3a1]">METICULEUX,</span></div>
                <div><span className="text-[#a6e3a1]">EMPHATIQUE,</span></div>
                <div><span className="text-[#a6e3a1]">SOCIAL</span></div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

          </div>

          {/* ==================== RIGHT CONTENT ==================== */}
          <div className="space-y-6">

            {/* Summary comment block */}
            <div className="space-y-0">
              <div><span className="text-[#6c7086]">/// &lt;summary&gt;</span></div>
              <div><span className="text-[#6c7086]">/// Recherche une alternance en programmation C# sur Unity3D</span></div>
              <div><span className="text-[#6c7086]">/// ou en C++ sur Unreal Engine. Pour une durée de 2 ans.</span></div>
              <div><span className="text-[#6c7086]">/// 4 jours entreprise, 1 jour école. Disponible IMMÉDIATEMENT.</span></div>
              <div><span className="text-[#6c7086]">/// &lt;\summary&gt;</span></div>
            </div>

            {/* ===== INFORMATION CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#cba6f7]">public class </span>
                <span className="text-[#f9e2af] text-lg font-bold">INFORMATION</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-6 space-y-1">
                <div>
                  <span className="text-[#cba6f7]">public string </span>
                  <span className="text-[#89b4fa]">NOM</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#a6e3a1]">&quot;KLIMOWICZ Julian&quot;</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#cba6f7]">public string </span>
                  <span className="text-[#89b4fa]">TITRE</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#a6e3a1]">&quot;Game Programmeur&quot;</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#cba6f7]">public string </span>
                  <span className="text-[#89b4fa]">EMAIL</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#a6e3a1]">&quot;klimowicz.stefan77@gmail.com&quot;</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#cba6f7]">public int </span>
                  <span className="text-[#89b4fa]">TÉLÉPHONE</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#fab387]">07 83 34 80 10</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#cba6f7]">public string[] </span>
                  <span className="text-[#89b4fa]">POSITION</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#cdd6f4]">{'{'}</span>
                  <span className="text-[#a6e3a1]">&quot;Combs-la-Ville&quot;</span>
                  <span className="text-[#cdd6f4]">,</span>
                  <span className="text-[#a6e3a1]">&quot;77380&quot;</span>
                  <span className="text-[#cdd6f4]">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-[#a6e3a1]">&quot;Seine-et-Marne&quot;</span>
                  <span className="text-[#cdd6f4]">,</span>
                  <span className="text-[#a6e3a1]">&quot;Île-de-France&quot;</span>
                  <span className="text-[#cdd6f4]">{'}'}</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#cba6f7]">public bool </span>
                  <span className="text-[#89b4fa]">PERMIS_B_VÉHICULÉ</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#cba6f7]">true</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#cba6f7]">public int </span>
                  <span className="text-[#89b4fa]">ÂGE</span>
                  <span className="text-[#cdd6f4]"> = </span>
                  <span className="text-[#fab387]">21</span>
                  <span className="text-[#cdd6f4]">;</span>
                </div>
              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* ===== FORMATIONS CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#cba6f7]">public partial class </span>
                <span className="text-[#f9e2af] text-lg font-bold">FORMATIONS</span>
                <span className="text-[#cdd6f4]"> : </span>
                <span className="text-[#89dceb] text-lg font-bold underline">ÉcolesSupérieures</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-6 space-y-3">
                
                {/* YnovConnect */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#cba6f7]">private void </span>
                    <span className="text-[#f9e2af]">YnovConnect</span>
                    <span className="text-[#cdd6f4]">()</span>
                  </div>
                  <div className="text-[#585b70]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Niveau</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Mastère</span>
                      <span className="text-[#cdd6f4]">;</span>
                      <span className="text-[#6c7086]"> // Pour une durée de 2 ans</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Date</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Aujourd&apos;hui</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Type</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Game</span>
                      <span className="text-[#cdd6f4]">.</span>
                      <span className="text-[#f9e2af]">Programmer</span>
                      <span className="text-[#cdd6f4]">();</span>
                    </div>
                  </div>
                  <div className="text-[#585b70]">{'}'}</div>
                </div>

                {/* ICAN */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#cba6f7]">private void </span>
                    <span className="text-[#f9e2af]">ICAN</span>
                    <span className="text-[#cdd6f4]">(</span>
                    <span className="text-[#89b4fa]">string[]</span>
                    <span className="text-[#cdd6f4]"> _Diplômes)</span>
                  </div>
                  <div className="text-[#585b70]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Niveau</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Bachelor</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Date</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Range</span>
                      <span className="text-[#cdd6f4]">(début: </span>
                      <span className="text-[#a6e3a1]">Octobre 2021</span>
                      <span className="text-[#cdd6f4]">, fin: </span>
                      <span className="text-[#a6e3a1]">Juin 2024</span>
                      <span className="text-[#cdd6f4]">);</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Type</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Game</span>
                      <span className="text-[#cdd6f4]">.</span>
                      <span className="text-[#f9e2af]">Design</span>
                      <span className="text-[#cdd6f4]">();</span>
                    </div>
                    <div>
                      <span className="text-[#cdd6f4]">_Diplômes = {'{'}</span>
                      <span className="text-[#a6e3a1]">&quot;Game Design&quot;</span>
                      <span className="text-[#cdd6f4]">,</span>
                      <span className="text-[#a6e3a1]">&quot;Designer Numérique&quot;</span>
                      <span className="text-[#cdd6f4]">{'}'}</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Obtention</span>
                      <span className="text-[#cdd6f4]"> =</span>
                      <span className="text-[#a6e3a1]">&quot;Samedi 24 Juin 2025&quot;</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                  </div>
                  <div className="text-[#585b70]">{'}'}</div>
                </div>

              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

            {/* ===== EXPÉRIENCES CLASS ===== */}
            <div className="space-y-1">
              <div>
                <span className="text-[#cba6f7]">public static class </span>
                <span className="text-[#f9e2af] text-lg font-bold">EXPÉRIENCES</span>
              </div>
              <div className="text-[#585b70]">{'{'}</div>
              <div className="ml-6 space-y-3">

                {/* StudioPREMA */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#cba6f7]">public void </span>
                    <span className="text-[#f9e2af]">StudioPREMA</span>
                    <span className="text-[#cdd6f4]">()</span>
                  </div>
                  <div className="text-[#585b70]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Durée</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#89dceb]">Range</span>
                      <span className="text-[#cdd6f4]">(début: </span>
                      <span className="text-[#a6e3a1]">Septembre 2024</span>
                      <span className="text-[#cdd6f4]">, fin: </span>
                      <span className="text-[#a6e3a1]">Novembre 2024</span>
                      <span className="text-[#cdd6f4]">);</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Lien</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#a6e3a1]">&quot;https://afjv.com/societe/1330-studio-prema.htm&quot;</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Type</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#cba6f7]">new </span>
                      <span className="text-[#89dceb]">Stage</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[#6c7086]">/*StudioPREMA est une petite studio de jeux vidéos PC fondé par</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">Arthur DEFOIN qui ont pour projet Eplitz, un moba compétitif inspiré de</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">League of Legends et Dota. Fait sous Unity 6 Durant ce Stage j&apos;étais</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">dans une équipe de développeur, mes missions étaient de créer les</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">compétences des personnages et d&apos;importer les différents assets 3D,</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">animations et VFX en collaboration avec les Game Artistes.*/</span>
                    </div>
                  </div>
                  <div className="text-[#585b70]">{'}'}</div>
                </div>

                {/* LeDouzisme */}
                <div className="space-y-0.5">
                  <div>
                    <span className="text-[#cba6f7]">public void </span>
                    <span className="text-[#f9e2af]">LeDouzisme</span>
                    <span className="text-[#cdd6f4]">()</span>
                  </div>
                  <div className="text-[#585b70]">{'{'}</div>
                  <div className="ml-6 space-y-0.5">
                    <div>
                      <span className="text-[#cba6f7]">var </span>
                      <span className="text-[#cdd6f4]">_Type</span>
                      <span className="text-[#cdd6f4]"> = </span>
                      <span className="text-[#cba6f7]">new </span>
                      <span className="text-[#89dceb]">Association</span>
                      <span className="text-[#cdd6f4]">;</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[#6c7086]">/*Le Douzisme est une association que j&apos;ai fondé avec des amis dans</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">laquelle on a comme projet de créer des jeux vidéos PC de plusieurs</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">genres et qui nous font plaisir. Notre premier projet est un survivor qui</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">servira de démo technique pour un projet plus ambitieux de &quot;rogue lite-</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">elite rpg&quot; avec de la coop. On est une toute petite équipe de 3 personnes</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">et nous travaillons sur notre projet quand on trouve du temps pour</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">ambition de transformer notre association en entreprise/studio et le</span>
                    </div>
                    <div>
                      <span className="text-[#6c7086]">survivor est un succès. Nous travaillons sur le moteur de jeu Unity.*/</span>
                    </div>
                  </div>
                  <div className="text-[#585b70]">{'}'}</div>
                </div>

              </div>
              <div className="text-[#585b70]">{'}'}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
