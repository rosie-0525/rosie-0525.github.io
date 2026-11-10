var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=t({default:()=>r}),r=`<section class="title-slide" data-transition="fade">
  <div class="title-decor" aria-hidden="true">
    <svg viewBox="0 0 960 700">
      <defs>
        <linearGradient id="decor-node-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="-343" x2="0" y2="343">
          <stop offset="0%" stop-color="#a51c30" stop-opacity="0" />
          <stop offset="32%" stop-color="#a51c30" stop-opacity="1" />
          <stop offset="68%" stop-color="#a51c30" stop-opacity="1" />
          <stop offset="100%" stop-color="#a51c30" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="decor-cusp-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="336" y2="0">
          <stop offset="0%" stop-color="#4a6fa5" stop-opacity="1" />
          <stop offset="55%" stop-color="#4a6fa5" stop-opacity="1" />
          <stop offset="100%" stop-color="#4a6fa5" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Drawing shifted +350px: the svg box hangs above the slide midline
           (see .title-decor) so the picture must be drawn one half-height
           lower to land on the slide. -->
      <g transform="translate(0 350)">

      <!-- nodal cubic y² = x²(x+1), node marked at the origin -->
      <g transform="translate(170 560) rotate(170)" opacity="0.1">
        <path
          fill="none"
          stroke="url(#decor-node-stroke)"
          stroke-width="2.5"
          d="M 309.4 -342.9 C 265.6 -278.1, 225.0 -223.6, 187.5 -178.1 C 150.0 -132.6, 115.6 -96.0, 84.4 -66.8 C 53.1 -37.6, 25.0 -15.8, 0.0 0.0 C -25.0 15.8, -46.9 25.7, -65.6 31.2 C -84.4 36.6, -100.0 37.6, -112.5 35.6 C -125.0 33.6, -134.4 28.7, -140.6 22.3 C -146.9 15.8, -150.0 7.9, -150.0 0.0 C -150.0 -7.9, -146.9 -15.8, -140.6 -22.3 C -134.4 -28.7, -125.0 -33.6, -112.5 -35.6 C -100.0 -37.6, -84.4 -36.6, -65.6 -31.2 C -46.9 -25.7, -25.0 -15.8, 0.0 0.0 C 25.0 15.8, 53.1 37.6, 84.4 66.8 C 115.6 96.0, 150.0 132.6, 187.5 178.1 C 225.0 223.6, 265.6 278.1, 309.4 342.9" />
      </g>
      <circle cx="170" cy="560" r="3.5" fill="#a51c30" opacity="0.35" />

      <!-- cusp y² = x³, cusp point marked at the origin -->
      <g transform="translate(785 180) rotate(-25)" opacity="0.09">
        <path
          fill="none"
          stroke="url(#decor-cusp-stroke)"
          stroke-width="2.5"
          d="M 336.4 -259.1 C 299.0 -215.9, 264.8 -180.0, 233.6 -150.0 C 202.5 -120.0, 174.4 -96.0, 149.5 -76.8 C 124.6 -57.6, 102.8 -43.2, 84.1 -32.4 C 65.4 -21.6, 49.8 -14.4, 37.4 -9.6 C 24.9 -4.8, 15.6 -2.4, 9.3 -1.2 C 3.1 -0.0, 0.0 -0.0, 0.0 -0.0 C 0.0 0.0, 3.1 0.0, 9.3 1.2 C 15.6 2.4, 24.9 4.8, 37.4 9.6 C 49.8 14.4, 65.4 21.6, 84.1 32.4 C 102.8 43.2, 124.6 57.6, 149.5 76.8 C 174.4 96.0, 202.5 120.0, 233.6 150.0 C 264.8 180.0, 299.0 215.9, 336.4 259.1" />
      </g>
      <circle cx="785" cy="180" r="3.5" fill="#4a6fa5" opacity="0.3" />

      </g>
    </svg>
  </div>

  <h1>Higher singularities and \\(K\\)-theory</h1>

  <hr class="title-rule" />

  <p class="author">Wanchun Shen</p>
  <p class="joint">joint work with Andrew Burke and Mihnea Popa</p>
  <p class="date">October 2026</p>
</section>
`,i=t({default:()=>a}),a=`<section class="toc-slide">
  <h2>Outline</h2>
  <ol class="toc-list">
    <li class="toc-active">Algebraic K-theory</li>
    <li>Singularities in algebraic geometry</li>
    <li>K-regularity and higher Du Bois singularities</li>
    <li>What next?</li>
  </ol>
</section>
`,o=t({default:()=>s}),s=`<section>
  <h2>Algebraic $K$-groups</h2>
  <p style="text-align: center; margin-bottom: 0.2rem;">
    $$\\text{ring } R \\;\\longmapsto\\; \\text{abelian groups } K_n(R),\\quad n \\in \\mathbb{Z}$$
  </p>
  <div class="two-col">
    <div class="two-col-main">
      <dl class="k-group-dl">
        <div class="k-group-entry fragment" data-fragment-index="0" style="padding-top: 1.75em;">
          <dt>$K_0$</dt>
          <dd>
            <span class="k-attr">(Grothendieck)</span>
            vector bundles on $\\operatorname{Spec} R$
          </dd>
        </div>
        <div class="k-group-entry fragment" data-fragment-index="1">
          <dt>$K_1$</dt>
          <dd>
            <span class="k-attr">(Whitehead)</span>
            automorphisms of vector bundles
          </dd>
        </div>
        <div class="k-group-entry fragment" data-fragment-index="2">
          <dt>$K_2$</dt>
          <dd>
            <span class="k-attr">(Milnor)</span>
            relations among automorphisms
          </dd>
        </div>
        <div class="k-group-entry fragment" data-fragment-index="3">
          <dt>$K_3, K_4, \\ldots$</dt>
          <dd>
            <span class="k-attr">(Quillen)</span>
            "higher" structures
          </dd>
        </div>
      </dl>
    </div>
    <div class="two-col-side fragment" data-fragment-index="0">
      <div style="position: relative; display: inline-block;">
        <img src="vector-bundle.jpeg"
             alt="A vector bundle projecting onto its base space"
             class="surface-image" />
        <div style="position: absolute; bottom: 8px; right: 8px; font-size: 0.4em; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.2); padding: 2px 4px; border-radius: 3px; line-height: 1;">
          Image credit: Gemini-3-pro-image-preview
        </div>
      </div>
      <p class="image-caption">A vector bundle over $\\operatorname{Spec} R$</p>
    </div>
  </div>
</section>

<section style="height: 100%; overflow-y: auto;">
  <div class="block definition">
    <div class="block-title">$K_0$ (Grothendieck group)</div>
    For finitely generated projective $R$-modules $P, Q$:
    $$K_0(R) \\;=\\; \\text{formal linear combinations of } [P] \\;\\Big/\\; \\langle [P] + [Q] = [P \\oplus Q] \\rangle$$
  </div>
  <div class="block definition fragment">
    <div class="block-title">$K_1$ (Whitehead group)</div>
    Let $GL(R) = \\varinjlim\\, GL_n(R)$ and $E(R) \\trianglelefteq GL(R)$ the
    subgroup of elementary matrices. By the Whitehead lemma,
    $$K_1(R) \\;=\\; GL(R)\\,/\\,E(R) \\;=\\; GL(R)^{\\mathrm{ab}}.$$
  </div>
  <div class="block definition fragment">
    <div class="block-title">$K_2$ (Milnor)</div>
    $E(R)$ is perfect, so it has a universal central extension by the
    Steinberg group $\\operatorname{St}(R)$:
    $$K_2(R) \\;=\\; \\ker\\!\\bigl(\\operatorname{St}(R) \\twoheadrightarrow E(R)\\bigr) \\;=\\; H_2\\!\\bigl(E(R),\\;\\mathbb{Z}\\bigr).$$
  </div>
  <div class="block definition fragment">
    <div class="block-title">$K_n$, $n \\geq 1$ (Quillen's $+$ construction)</div>
    Apply the plus construction to $BGL(R)$ with respect to $E(R)$:
    $$K_n(R) \\;=\\; \\pi_n\\!\\bigl(BGL(R)^+\\bigr).$$
    This recovers $K_1 = \\pi_1$ and $K_2 = \\pi_2$ and extends uniformly.
  </div>
</section>
`,c=t({default:()=>l}),l=`<section>
  <h2>Negative $K$-groups</h2>
  <p>Bass extended $K$-theory to negative indices:</p>
  $$K_{-1}(R),\\; K_{-2}(R),\\; K_{-3}(R),\\; \\ldots$$
  <div class="block definition fragment">
    <div class="block-title">Definition</div>
    <p>
      \\[K_{-1}(R):= \\mathrm{coker}(K_0(R[t]) \\oplus K_0(R[t^{- 1}]) \\to K_0(R[t, t^{-1}])).\\]
    </p>
    <p>
      Recursively define $K_{-n+1}(R)$ from $K_{-n}(R)$.
    </p>
  </div>
  <div class="block theorem fragment">
    <div class="block-title">Key properties</div>
    <ol style="text-align: left;">
      <li>
        <span style="display: inline-block; position: relative;">
          <strong>(Bass)</strong> If $R$ is Noetherian and <strong>regular</strong>, then
          $K_i(R) = 0$ for all $i &lt; 0$.
          <span class="fragment" style="position: absolute; left: 100%; top: 0; margin-left: 20px; color: #3173ac; font-weight: bold; z-index: 10; line-height: 1.25; width: max-content; display: block;">
            $\\rightsquigarrow$ Negative $K$-groups<br>
            <span style="padding-left: 1.2em; display: inline-block;">measure singularities</span>
          </span>
        </span>
      </li>
      <li class="fragment">
        <strong>(Weibel's conjecture; proved by Kerz&ndash;Strunk&ndash;Tamme)</strong>
        <p style="text-align: center; margin: 0.3em 0 0;">
          $K_i(R) = 0$ for all $i &lt; -\\dim R$.
        </p>
      </li>
    </ol>
  </div>
</section>
<section>

  <p class="fragment" style="
    display: inline-block;
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #1a1a2e;
    border-left: 4px solid #4a90d9;
    padding: 0.25em 0.75em;
    background: linear-gradient(90deg, rgba(74,144,217,0.08) 0%, transparent 100%);
    border-radius: 0 6px 6px 0;
    margin-bottom: 0.5em;
  ">
    Dimension 1 — curves
  </p>
  <br />
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 1rem; justify-items: center; align-items: center; margin-top: 1rem; width: 100%;">
    <img class="fragment" src="k-cusp.jpeg" alt="Cusp singularity" style="width: 100%; margin: 0;" />
    <img class="fragment" src="k-node.jpeg" alt="Node singularity" style="width: 100%; margin: 0;" />
    <img class="fragment" src="k-triple.jpeg" alt="Triple point singularity" style="width: 100%; margin: 0;" />
    <img class="fragment" src="k-snc.jpeg" alt="SNC singularity" style="width: 100%; margin: 0;" />
  </div>
  <p class="fragment" style="margin-top: 1rem; text-align: left; font-size: 0.9em;">
    Follows from Weibel's formula: $K_{-1}(C) = \\mathbb{Z}^\\lambda$, where $\\lambda = \\#\\text{loops in the dual complex of } C$.
  </p>
</section>
<section>
  <p style="
    display: inline-block;
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #1a1a2e;
    border-left: 4px solid #4a90d9;
    padding: 0.25em 0.75em;
    background: linear-gradient(90deg, rgba(74,144,217,0.08) 0%, transparent 100%);
    border-radius: 0 6px 6px 0;
    margin-bottom: 0.5em;
  ">
    Dimension 2 — surfaces
  </p>
  <div class="block theorem fragment" data-fragment-index="0" style="padding: 0.45em 1em 0.4em; margin: 0.35rem 0 0.65rem;">
    <div class="block-title">Fact</div>
    <p style="margin: 0; font-size: 0.86em; text-align: left;">
      Let $X=\\operatorname{Spec}R$ be a normal surface. Then
      \\[K_{-2}(R) \\cong \\mathbb{Z}^{\\# \\text{loops in the dual graph of } E}\\]
      where $E$ is the exceptional divisor of the minimal resolution of $X$.
    </p>
  </div>
  <!-- Observation box, commented out for now. Reveal renumbers the
       remaining fragment indices (0, 4–7) without gaps, so no empty
       key presses; uncomment to restore as is.

       The formula changes in place: plain 2s → highlighted 2s → d.
       Reveal plays explicitly indexed fragments before unindexed ones,
       so every fragment on this slide carries an index.
  <div class="block definition fragment" data-fragment-index="1" style="padding: 0.45em 1em 0.4em; margin: 0.35rem 0 0.65rem;">
    <div class="block-title">Observation</div>
    <div class="swap-stack" style="font-size: 0.86em;">
      <div class="fragment fade-out" data-fragment-index="2">
        \\[K_{-2}(X) = H^{1}(\\text{dual complex of } E) = W_0 H^{2}(X, \\mathbb{Z})\\]
      </div>
      <div class="fragment current-visible" data-fragment-index="2">
        \\[K_{-\\color{#a51c30}2}(X) = H^{\\color{#a51c30}1}(\\text{dual complex of } E) = W_0 H^{\\color{#a51c30}2}(X, \\mathbb{Z})\\]
      </div>
      <div class="fragment" data-fragment-index="3">
        \\[K_{-\\color{#a51c30}d}(X) = H^{\\color{#a51c30}d-1}(\\text{dual complex of } E) = W_0 H^{\\color{#a51c30}d}(X, \\mathbb{Z})\\]
      </div>
    </div>
  </div>
  -->

  <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.55rem; width: 100%;">
    <div class="fragment" data-fragment-index="4" style="border: 1px solid rgba(74,111,165,0.25); border-radius: 8px; padding: 0.5rem 0.65rem 0.45rem; background: rgba(74,111,165,0.035); text-align: center;">
      <div style="line-height: 1.1;">
        <strong style="font-size: 0.76em; color: #4a6fa5;">$A_3$ rational double point</strong>
      </div>
      <p style="font-size: 0.68em; margin: 0.12rem 0 0;">$xy+z^4=0$</p>
      <svg viewBox="0 0 320 90" role="img" aria-label="The A3 exceptional divisor and its dual graph" style="display: block; width: 100%; height: 82px; margin: 0.05rem auto 0;">
        <path d="M160 8 V73" stroke="#c8c3b8" stroke-width="1" stroke-dasharray="3 4" />
        <g fill="none" stroke="#4a6fa5" stroke-width="3" stroke-linecap="round">
          <line x1="21" y1="42" x2="130" y2="42" />
          <line x1="43" y1="18" x2="57" y2="67" />
          <line x1="94" y1="18" x2="108" y2="67" />
        </g>
        <g fill="#21212e">
          <circle cx="49.9" cy="42" r="3" />
          <circle cx="100.9" cy="42" r="3" />
        </g>
        <g stroke="#4a6fa5" stroke-width="3" fill="none" stroke-linecap="round">
          <path d="M195 41 H240 M240 41 H285" />
        </g>
        <g fill="#fbfaf7" stroke="#4a6fa5" stroke-width="3">
          <circle cx="195" cy="41" r="8" />
          <circle cx="240" cy="41" r="8" />
          <circle cx="285" cy="41" r="8" />
        </g>
        <text x="75" y="86" text-anchor="middle" fill="#6b675d" font-size="10" font-style="italic">E</text>
        <text x="240" y="86" text-anchor="middle" fill="#6b675d" font-size="10" font-style="italic">dual graph</text>
      </svg>
      <p style="font-size: 0.76em; font-weight: 600; margin: 0.2rem 0 0; color: #4a6fa5;">$K_{-2}(X)=0$</p>
    </div>

    <div class="fragment" data-fragment-index="5" style="border: 1px solid rgba(74,111,165,0.25); border-radius: 8px; padding: 0.5rem 0.65rem 0.45rem; background: rgba(74,111,165,0.035); text-align: center;">
      <div style="line-height: 1.1;">
        <strong style="font-size: 0.76em; color: #4a6fa5;">$D_4$ rational double point</strong>
      </div>
      <p style="font-size: 0.68em; margin: 0.12rem 0 0;">$z^2+xy^2+x^3=0$</p>
      <svg viewBox="0 0 320 90" role="img" aria-label="The D4 exceptional divisor and its dual graph" style="display: block; width: 100%; height: 82px; margin: 0.05rem auto 0;">
        <path d="M160 8 V73" stroke="#c8c3b8" stroke-width="1" stroke-dasharray="3 4" />
        <g fill="none" stroke="#4a6fa5" stroke-width="3" stroke-linecap="round">
          <line x1="21" y1="42" x2="130" y2="42" />
          <line x1="43" y1="18" x2="57" y2="67" />
          <line x1="68" y1="18" x2="79" y2="67" />
          <line x1="97" y1="18" x2="106" y2="67" />
        </g>
        <g fill="#21212e">
          <circle cx="49.9" cy="42" r="3" />
          <circle cx="73.4" cy="42" r="3" />
          <circle cx="101.4" cy="42" r="3" />
        </g>
        <g stroke="#4a6fa5" stroke-width="3" fill="none" stroke-linecap="round">
          <path d="M232 41 L195 41 M232 41 L273 21 M232 41 L273 61" />
        </g>
        <g fill="#fbfaf7" stroke="#4a6fa5" stroke-width="3">
          <circle cx="232" cy="41" r="7" />
          <circle cx="195" cy="41" r="7" />
          <circle cx="273" cy="21" r="7" />
          <circle cx="273" cy="61" r="7" />
        </g>
        <text x="75" y="86" text-anchor="middle" fill="#6b675d" font-size="10" font-style="italic">E</text>
        <text x="240" y="86" text-anchor="middle" fill="#6b675d" font-size="10" font-style="italic">dual graph</text>
      </svg>
      <p style="font-size: 0.76em; font-weight: 600; margin: 0.2rem 0 0; color: #4a6fa5;">$K_{-2}(X)=0$</p>
    </div>

    <div class="fragment" data-fragment-index="6" style="border: 1px solid rgba(165,28,48,0.25); border-radius: 8px; padding: 0.5rem 0.65rem 0.45rem; background: rgba(165,28,48,0.035); text-align: center;">
      <div style="line-height: 1.1;">
        <strong style="font-size: 0.76em; color: #a51c30;">$T_{2,4,5}$ cusp</strong>
      </div>
      <p style="font-size: 0.68em; margin: 0.12rem 0 0;">$x^2+y^4+z^5+xyz=0$</p>
      <svg viewBox="0 0 320 90" role="img" aria-label="The T245 cusp exceptional divisor and its cyclic dual graph" style="display: block; width: 100%; height: 82px; margin: 0.05rem auto 0;">
        <path d="M160 8 V73" stroke="#c8c3b8" stroke-width="1" stroke-dasharray="3 4" />
        <path d="M75 17 L111 30 L111 56 L75 69 L39 56 L39 30 Z" fill="none" stroke="#a51c30" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <g fill="#21212e">
          <circle cx="75" cy="17" r="2.8" /><circle cx="111" cy="30" r="2.8" />
          <circle cx="111" cy="56" r="2.8" /><circle cx="75" cy="69" r="2.8" />
          <circle cx="39" cy="56" r="2.8" /><circle cx="39" cy="30" r="2.8" />
        </g>
        <path d="M201 43 L218 20 L262 20 L279 43 L262 66 L218 66 Z" fill="none" stroke="#a51c30" stroke-width="3" stroke-linejoin="round" />
        <g fill="#fbfaf7" stroke="#a51c30" stroke-width="3">
          <circle cx="201" cy="43" r="5.5" /><circle cx="218" cy="20" r="5.5" />
          <circle cx="262" cy="20" r="5.5" /><circle cx="279" cy="43" r="5.5" />
          <circle cx="262" cy="66" r="5.5" /><circle cx="218" cy="66" r="5.5" />
        </g>
        <text x="75" y="86" text-anchor="middle" fill="#6b675d" font-size="10" font-style="italic">E</text>
        <text x="240" y="86" text-anchor="middle" fill="#6b675d" font-size="10" font-style="italic">dual graph</text>
      </svg>
      <p style="font-size: 0.76em; font-weight: 600; margin: 0.2rem 0 0; color: #a51c30;">$K_{-2}(X)=\\mathbb{Z}$</p>
    </div>
  </div>
  <p class="fragment" data-fragment-index="7" style="margin: 1rem 0 0; font-size: 0.95em; text-align: center; color: #1a1a2e;">
    <strong>Fact:</strong> $K_{-2}=0$ for rational double points.
  </p>
</section>
<section>
  <div class="block theorem">
    <div class="block-title">Theorem (Srinivas, Weibel)</div>
    <p>
      For a normal surface $\\operatorname{Spec} R$,
      \\[K_{-1}(R) \\cong \\bigoplus_{\\mathfrak{m}\\in R_{\\mathrm{sing}}} \\operatorname{Cl}(\\widehat{R}_\\mathfrak{m})/\\operatorname{Cl}(R)\\]
    </p>
  </div>
  <div class="block example fragment">
    <div class="block-title">Example: Rational double points</div>
    <p style="font-size: 0.85em; margin-bottom: 0.5em;">
      Suppose $k$ has characteristic zero. $R$ has a <em>rational double point</em> if $\\widehat{R} \\cong k[[x,y,z]]/(f)$ for:
    </p>
    <table style="font-size: 0.75em; margin: 0 auto; border-collapse: collapse; text-align: left;">
      <tr>
        <td style="padding: 0.2em 1em; border: none;">$(A_n)$</td>
        <td style="padding: 0.2em 1em; border: none;">$f = z^{n+1} + xy$</td>
        <td style="padding: 0.2em 1em; border: none;">$\\operatorname{Cl}(\\widehat{R}) \\cong \\mathbb{Z}/(n+1)$</td>
      </tr>
      <tr>
        <td style="padding: 0.2em 1em; border: none; vertical-align: middle;">$(D_n), n \\geq 4$</td>
        <td style="padding: 0.2em 1em; border: none; vertical-align: middle;">$f = z^2 + xy^2 + x^{n-1}$</td>
        <td style="padding: 0.2em 1em; border: none; vertical-align: middle;">
          $\\operatorname{Cl}(\\widehat{R}) \\cong \\begin{cases} (\\mathbb{Z}/2)^2 & \\text{for } n \\text{ even,} \\\\ \\mathbb{Z}/4 & \\text{for } n \\text{ odd.} \\end{cases}$
        </td>
      </tr>
      <tr>
        <td style="padding: 0.2em 1em; border: none;">$(E_6)$</td>
        <td style="padding: 0.2em 1em; border: none;">$f = z^2 + y^3 + x^4$</td>
        <td style="padding: 0.2em 1em; border: none;">$\\operatorname{Cl}(\\widehat{R}) \\cong \\mathbb{Z}/3$</td>
      </tr>
      <tr>
        <td style="padding: 0.2em 1em; border: none;">$(E_7)$</td>
        <td style="padding: 0.2em 1em; border: none;">$f = z^2 + x^3y + y^3$</td>
        <td style="padding: 0.2em 1em; border: none;">$\\operatorname{Cl}(\\widehat{R}) \\cong \\mathbb{Z}/2$</td>
      </tr>
      <tr>
        <td style="padding: 0.2em 1em; border: none;">$(E_8)$</td>
        <td style="padding: 0.2em 1em; border: none;">$f = z^2 + x^3 + y^5$</td>
        <td style="padding: 0.2em 1em; border: none;">$\\operatorname{Cl}(\\widehat{R}) = 0$</td>
      </tr>
    </table>
    <p style="font-size: 0.85em; margin-top: 0.8em; margin-bottom: 0;">
      In particular, $K_{-1}(R)$ is torsion in these cases.
    </p>
  </div>
</section>
<section>
  <div class="fragment" style="margin-bottom: 2rem;">
    <p>
      Recall that a normal variety $X$ has <strong>rational singularities</strong> if for a resolution of singularities $f: \\tilde{X} \\to X$, $R^i f_* \\mathcal{O}_{\\tilde{X}} = 0$ for all $i > 0$.
    </p>
  </div>
  <div class="block theorem fragment">
    <div class="block-title">Theorem (Artin)</div>
    <p>
      For surfaces in $\\mathbb{A}^3$,
      $$\\text{rational double points} = \\text{rational singularities}.$$
    </p>
  </div>
  <div class="block theorem fragment" style="margin-top: 2rem;">
    <div class="block-title">Theorem (Burke–Popa–S.)</div>
    <p>
      Let $X$ be a complex projective variety of dimension $d \\geq 2$. If $X$ has rational singularities, then
      $$K_{-d}(X) \\text{ and } K_{-d+1}(X) \\text{ are torsion.}$$
    </p>
  </div>
</section>
`,u=t({default:()=>d}),d=`<section>
  <h2>$K$-theory of schemes</h2>
  <div class="block definition">
    <div class="block-title">Remark</div>
    <p>
      By the work of Quillen, Waldhausen, Thomason&ndash;Trobaugh, and Pedersen&ndash;Weibel, the definition of $K$-theory extends to more general categories, and in particular to arbitrary schemes.
    </p>
  </div>
  <div>This gives:</div>
  <div class="fragment" style="font-size: 1.5em; margin-top: 1em;">
    \\[ X \\mapsto K_n(X), \\quad n \\in \\mathbb{Z} \\]
  </div>
</section>
`,f=t({default:()=>p}),p=`<section>
  <h2>$\\mathbb{A}^1$-invariance <span class="fragment fade-left" data-fragment-index="4" style="font-size: 0.65em; font-weight: bold; color: #3173ac;">$\\leftrightsquigarrow$ $K$-theory behaves like a homotopy theory</span></h2>
  <div class="block theorem">
    <div class="block-title">Theorem (Quillen)</div>
    <p>If $X$ is a Notherian <strong>regular</strong> scheme, then</p>
    $$K_m(X)\\cong K_m(X\\times \\mathbb{A}^1) \\quad \\text{for all } m \\in \\mathbb{Z}.$$
  </div>
  <table class="fragment" data-fragment-index="1" style="margin: 1em auto; border-collapse: collapse; width: 80%;">
    <thead>
      <tr style="border-bottom: 2px solid var(--r-main-color);">
        <th style="padding: 0.5em; text-align: center;">$\\mathbb{A}^1$-homotopy theory</th>
        <th style="padding: 0.5em; text-align: center;">Classical topology</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid rgba(0,0,0,0.1);">
        <td style="padding: 0.5em; text-align: center;"><div class="fragment" data-fragment-index="2">Affine line $\\mathbb{A}^1$</div></td>
        <td style="padding: 0.5em; text-align: center;"><div class="fragment" data-fragment-index="2">Unit Interval $[0,1]$</div></td>
      </tr>
      <tr>
        <td style="padding: 0.5em; text-align: center;"><div class="fragment" data-fragment-index="3">$X \\times \\mathbb{A}^1$</div></td>
        <td style="padding: 0.5em; text-align: center;"><div class="fragment" data-fragment-index="3"><img src="cylinder.png" alt="Cylinder over X" style="height: 100px; margin: 0; border: none; box-shadow: none; background: transparent;"></div></td>
      </tr>
    </tbody>
  </table>
</section>
<section>
  <p class="transition-text">This fails for singular varieties:</p>
  <div class="fragment">
    <div class="block example">
      <div class="block-title">Example (Bloch&ndash;Murthy, Weibel)</div>
      <p>
        Let $X=(x^2+y^3+z^7=0)\\subset \\mathbb{C}^3$. Then
        $$K_0(X)\\not\\cong K_0(X\\times \\mathbb{A}^1).$$
      </p>
    </div>
  </div>
  <div class="fragment">
    <div class="block example">
      <div class="block-title">Example (Weibel)</div>
      <p>
        Let $X=(x^2+y^3+z^7=0)\\subset \\mathbb{C}^3$. Then
        $$K_{-1}(X) \\not\\cong K_{-1}(X \\times \\mathbb{A}^1).$$
      </p>
      <div class="fragment">
        <p>
          However,
          $$K_{-2}(X) \\cong K_{-2}(X \\times \\mathbb{A}^r),\\quad \\forall\\, r\\ge 0.$$
        </p>
      </div>
    </div>
  </div>
</section>
<section>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
    <div style="position: relative; display: inline-block;">
      <img
        src="non-DB-surface.jpeg"
        alt="The singular surface x² + y³ + z⁷ = 0"
        style="max-height: 500px; width: auto; display: block; margin: 0 auto;"
      />
      <div style="position: absolute; bottom: 8px; right: 8px; font-size: 0.4em; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.2); padding: 2px 4px; border-radius: 3px; line-height: 1;">
        Image credit: Gemini-3-pro-image-preview
      </div>
    </div>
    <p style="font-size: 1.2em; margin-bottom: 0.5em;">The surface $x^2 + y^3 + z^7 = 0$</p>
  </div>
</section>
<section>
  <div class="block theorem">
    <div class="block-title">Conjecture (Vorst)</div>
    <p>
      If $X$ is an affine scheme essentially of finite type over a field, then
      $$\\mathbb{A}^1\\text{-invariance of } K_n(X) \\text{ for all } n \\implies X \\text{ is regular.}$$
    </p>
  </div>
  <p class="fragment">
    Known for varieties over <strong>perfect fields</strong> by
    Corti&ntilde;as&ndash;Haesemeyer&ndash;Weibel and
    Kerz&ndash;Strunk&ndash;Tamme.
  </p>
</section>
`,m=t({default:()=>h}),h=`<section>
  <h2>$K$-regularity</h2>
  <div class="block definition">
    <div class="block-title">Definition (Bass)</div>
    <p>
      We say $X$ is
      <strong>$K_m$-regular</strong>
      if $K_m(X)\\cong K_m(X\\times \\mathbb{A}^r)$
      for all $r\\ge 0$.
    </p>
  </div>
  <table style="border: none; margin: 0 auto; font-size: inherit;">
    <tr class="fragment">
      <td style="border: none; text-align: right; padding: 0;">regular</td>
      <td style="border: none; text-align: left; padding: 0;">$\\implies K_m$-regular (Quillen)</td>
    </tr>
    <tr class="fragment">
      <td style="border: none; padding: 0;"></td>
      <td style="border: none; text-align: left; padding: 0;">$\\implies K_{m-1}$-regular (Vorst, Dayton&ndash;Weibel)</td>
    </tr>
  </table>
  <div class="block example fragment">
    <div class="block-title">Example</div>
    <p>
      Let $X = (x^2{+}y^3{+}z^7 = 0) \\subset \\mathbb{C}^3$.
    </p>
    <ul>
      <li class="fragment">Not $K_0$-regular (Bloch&ndash;Murthy).</li>
      <li class="fragment">Not $K_{-1}$-regular (Weibel).</li>
      <li class="fragment">Is $K_{-2}$-regular (Weibel).</li>
    </ul>
  </div>
</section>
`,g=t({default:()=>_}),_=`<section style="height: 100%; overflow-y: auto;">
  <h2>When is a variety $K_m$-regular?</h2>
  <div class="block theorem">
    <div class="block-title">Theorem (S.)</div>
    <p>
      Let $X = (f(x_1, \\ldots, x_n) = 0)\\subset \\mathbb{C}^n$ be a
      hypersurface with isolated singularities. Then
    </p>
    <div class="fragment">
      $$X \\text{ is } K_m\\text{-regular} \\iff \\tilde{\\alpha}_f \\ge \\left\\lceil{\\frac{m+n-1}{2}}\\right\\rceil,$$
    </div>
    <p class="fragment">
      where $\\tilde{\\alpha}_f$ is the
      <strong>minimal exponent</strong> of $f$.
    </p>
  </div>
  <div class="fragment" style="margin-top: 1em;">
    <iframe data-src="https://www.unimelb-macaulay2.cloud.edu.au/#home" width="100%" height="800px" style="border: 1px solid #ccc; border-radius: 8px; background: white;"></iframe>
  </div>
</section>
<section>
  <div>
    <div class="block example">
      <div class="block-title">Example</div>
      <p>
        Let $f = x^2+y^3+z^7$. Then
        $\\tilde{\\alpha}_f = \\tfrac{1}{2}+\\tfrac{1}{3}+\\tfrac{1}{7} = \\tfrac{41}{42} < 1$.
      </p>
    </div>
  </div>
  <div class="fragment">
    <p>
      By the theorem, $R$ is
      $K_m$-regular
      iff $\\tilde{\\alpha}_f \\geq \\lceil \\tfrac{m+2}{2} \\rceil$:
    </p>
    <table class="k-reg-table">
      <thead>
        <tr>
          <th>$m$</th>
          <th>$\\lceil \\tfrac{m+2}{2} \\rceil$</th>
          <th>$K_m$-regular?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$-2$</td>
          <td>$0$</td>
          <td class="check">&#10003;</td>
        </tr>
        <tr>
          <td>$-1$</td>
          <td>$1$</td>
          <td class="cross">&#10007;</td>
        </tr>
        <tr>
          <td>$0$</td>
          <td>$1$</td>
          <td class="cross">&#10007;</td>
        </tr>
        <tr>
          <td>$1$</td>
          <td>$2$</td>
          <td class="cross">&#10007;</td>
        </tr>
        <tr>
          <td>$2$</td>
          <td>$2$</td>
          <td class="cross">&#10007;</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section style="font-size: 0.8em;">
  <div class="block theorem">
    <div class="block-title">Corollary</div>
    <p>
      For a complex hypersurface $X$ of dimension $d$ with isolated singularities, we have:
    </p>
    <ul>
      <li>
        $X$ is $K_{-d}$-regular
        <span class="fragment" data-fragment-index="3" style="color: #4a6fa5;">(Holds in general by Cortiñas&ndash;Haesemeyer&ndash;Schlichting&ndash;Weibel and Kerz&ndash;Strunk&ndash;Tamme)</span>
      </li>
      <li class="fragment" data-fragment-index="1">
        $K_{-d+1}\\text{-regular} \\iff K_{-d+2}\\text{-regular}$
      </li>
      <li class="fragment" data-fragment-index="2">
        $K_{-d+3}\\text{-regular} \\iff K_{-d+4}\\text{-regular}$
        <br>
        $\\cdots$
      </li>
      
    </ul>
  </div>
  <div class="fragment">
    <div class="block question">
      <div class="block-title">Remark</div>
      <p>This fails for:</p>
      <ul>
        <li class="fragment">
          <strong>Non-isolated singularities:</strong><br>
          $X = (xyzwu=0) \\subset \\mathbb{C}^5$ is $K_1$-regular but not $K_2$-regular.
        </li>
        <li class="fragment">
          <strong>Non-hypersurfaces:</strong><br>
          Cone over $C \\times \\mathbb{P}^1$ (for $C$ a genus $g$ curve, in sufficiently ample embeddings) is $K_{-2}$-regular but not $K_{-1}$-regular.
        </li>
      </ul>
    </div>
  </div>
</section>
`,v=t({default:()=>ee}),ee=`<section>
  <h2>Regularity criterion</h2>
  <div class="block theorem">
    <div class="block-title">Conjecture (Vorst)</div>
    <p>
      If $X$ is affine and
      $K_{\\dim X + 1}$-regular, then
      $X$ is regular.
    </p>
  </div>
  <p class="fragment">
    Known for varieties over <strong>perfect fields</strong> by
    Corti&ntilde;as&ndash;Haesemeyer&ndash;Weibel and
    Kerz&ndash;Strunk&ndash;Tamme.
  </p>
  <div class="fragment">
    <div class="block theorem">
      <div class="block-title">Theorem (S.)</div>
      <p>
        For affine <strong>local complete intersections</strong> over a field of characteristic zero,
        $$\\text{$K_2$-regular}
        \\Rightarrow \\text{regular}.$$
      </p>
    </div>
  </div>
  <p class="fragment">
    This is optimal:
  </p>
  <div class="fragment">
    <div class="block example">
      <div class="block-title">Example</div>
      <p>
        If $X$ is a simple normal crossing
        divisor, then $X$ is
        $K_1$-regular.
      </p>
    </div>
  </div>
</section>
`,y=t({default:()=>b}),b=`<section>
  <h2>Proof ingredients</h2>
  <ol class="proof-list">
    <li class="fragment" data-fragment-index="1">
      <strong>Trace methods</strong> (Cortiñas, Haesemeyer, Schlichting,
      Walker, Weibel):
      <div class="block example fragment" data-fragment-index="2">
        <table style="margin: 0 auto; border: none; background: transparent; transform: translateX(-5%);">
          <tr>
            <td style="border: none; text-align: right;">$K$-regularity</td>
            <td style="border: none; text-align: center; padding: 0 15px;">$\\leftrightsquigarrow$</td>
            <td style="border: none; text-align: center;">cdh-differentials</td>
          </tr>
          <tr>
            <td style="border: none; text-align: right; color: #e7ad52;" class="fragment" data-fragment-index="6">
              <span style="font-size: 0.6em; margin-right: 0px;">Haesemeyer-Weibel, S.</span><div style="transform: rotate(90deg); display: inline-block; margin-right: 20px;">$\\leftrightsquigarrow$</div>
            </td>
            <td style="border: none;"></td>
            <td style="border: none; text-align: center;" class="fragment" data-fragment-index="3"><div style="transform: rotate(90deg); display: inline-block;">$\\leftrightsquigarrow$</div></td>
          </tr>
          <tr>
            <td style="border: none; text-align: right;" class="fragment" data-fragment-index="4">higher DB singularities</td>
            <td style="border: none; text-align: center; padding: 0 15px;" class="fragment" data-fragment-index="4">$\\leftrightsquigarrow$</td>
            <td style="border: none; text-align: center;" class="fragment" data-fragment-index="3">Du Bois complex</td>
          </tr>
        </table>
      </div>
    </li>
    <li class="fragment" data-fragment-index="5">
      <strong>Hodge theory/higher singularities</strong> (Mustață, Olano, Popa, Witaszek; Jung,
      Kim, Saito, Yoon, Friedman, Laza, Chen, Dirks, Raychaudhury, Venkatesh, Vo, S., Kovács)
    </li>
  </ol>
</section>
`,x=t({default:()=>S}),S=`<section class="toc-slide">
  <h2>Outline</h2>
  <ol class="toc-list">
    <li>Algebraic K-theory</li>
    <li class="toc-active">Higher singularities</li>
    <li>Higher Du Bois singularities and K-regularity</li>
    <li>What next?</li>
  </ol>
</section>
`,C=t({default:()=>w}),w=`<section>
  <h2>Singularities of algebraic varieties</h2>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px 30px; margin-top: 20px;">
    <style>
      .singularity-item {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .singularity-img {
        width: 200px;
        height: 200px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
        mix-blend-mode: multiply;
      }
      .singularity-title {
        margin-top: 5px;
        font-size: 18px;
      }
    </style>
    
    <div class="singularity-item">
      <img src="dullo.png" class="singularity-img" alt="dullo">
      <div class="singularity-title">\\( (x^2+y^2+z^2)^2 - (x^2+y^2)=0 \\)</div>
    </div>
    
    <div class="singularity-item">
      <img src="zitrus.png" class="singularity-img" alt="zitrus">
      <div class="singularity-title">\\( x^2+z^2=y^3(y-1)^3 \\)</div>
    </div>

    <div class="singularity-item">
      <img src="fanfare.png" class="singularity-img" alt="fanfare">
      <div class="singularity-title">\\( -x^3+z^2+y^2 \\)</div>
    </div>
    
    <div class="singularity-item">
      <img src="kolibri.png" class="singularity-img" alt="kolibri">
      <div class="singularity-title">\\( x^3 + x^2z^2 - y^2 \\)</div>
    </div>
    
    <div class="singularity-item">
      <img src="zeck.png" class="singularity-img" alt="zeck">
      <div class="singularity-title">\\( x^2+y^2-z^3(1-z) \\)</div>
    </div>

    <div class="singularity-item">
      <img src="sofa.png" class="singularity-img" alt="sofa">
      <div class="singularity-title">\\( x^2+y^5+z^5 \\)</div>
    </div>
  </div>
  
  <div style="position: absolute; bottom: -50px; right: 0; font-size: 14px; color: #666;">
    Photo credit: Herwig Hauser – Gallery of algebraic surfaces
  </div>
</section>

<section> 
  <svg viewBox="0 0 1000 600" width="100%" height="600px">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
      </marker>
    </defs>
    <style>
      .node-text { font-family: sans-serif; font-size: 36px; text-anchor: middle; fill: #333; }
      .edge-text { font-family: sans-serif; font-size: 22px; text-anchor: middle; fill: #555; }
      .squiggly-arrow { fill: none; stroke: #333; stroke-width: 3; }
      .db-ellipse { fill: none; stroke: #00008B; stroke-width: 3; }
      .db-text { font-family: sans-serif; font-size: 32px; fill: #00008B; text-anchor: middle; }
    </style>

    <!-- 1. display "smooth varieties" -->
    <g class="fragment" data-fragment-index="1">
      <text x="250" y="310" class="node-text">smooth varieties</text>
    </g>

    <!-- 2. Top arrow and first "singularities" -->
    <g class="fragment" data-fragment-index="2">
      <line x1="400" y1="290" x2="630" y2="230" class="squiggly-arrow" marker-end="url(#arrowhead)" />
      <!-- Rotate text to match the arrow angle roughly -->
      <text x="500" y="220" class="edge-text" transform="rotate(-15, 500, 220)">classification theory</text>
      <text x="500" y="250" class="edge-text" transform="rotate(-15, 500, 250)">of algebraic varieties</text>
      
      <text x="750" y="220" class="node-text">singularities</text>
    </g>

    <!-- 3. Bottom arrow and second "singularities" -->
    <g class="fragment" data-fragment-index="3">
      <line x1="400" y1="330" x2="630" y2="390" class="squiggly-arrow" marker-end="url(#arrowhead)" />
      <text x="500" y="400" class="edge-text" transform="rotate(15, 500, 400)">compactification of moduli</text>
      
      <text x="750" y="410" class="node-text">singularities</text>
    </g>

    <!-- 4. ellipse with "Du Bois singularities" -->
    <g class="fragment" data-fragment-index="4">
      <ellipse cx="500" cy="310" rx="460" ry="260" class="db-ellipse" />
      <text x="950" y="60" class="db-text" style="text-anchor: end;">Du Bois singularities</text>
    </g>
  </svg>
</section>
<section>
<svg viewBox="-100 -50 1200 600" width="120%" height="600px" style="margin-left: -10%;">
  <style>
    .blue { stroke: #00008B; fill: none; stroke-width: 2; }
    .red { stroke: #8B0000; fill: none; stroke-width: 2; }
    .blue-text { fill: #00008B; font-family: sans-serif; font-size: 24px; }
    .red-text { fill: #8B0000; font-family: sans-serif; font-size: 24px; }
    .orange-text { fill: #D2691E; font-family: sans-serif; font-size: 20px; }
    .dot { fill: #D2691E; }
  </style>

  <!-- Ellipses -->
  <g class="fragment" data-fragment-index="1">
    <ellipse cx="500" cy="250" rx="540" ry="264" class="blue" />
    <text x="100" y="50" class="blue-text">Du Bois</text>
  </g>
  
  <g class="fragment" data-fragment-index="2">
    <ellipse cx="520" cy="250" rx="360" ry="192" class="red" />
    <text x="220" y="120" class="red-text">rational</text>
  </g>
  
  <g class="fragment" data-fragment-index="3">
    <ellipse cx="570" cy="250" rx="240" ry="120" class="blue" />
    <text x="320" y="180" class="blue-text">1-Du Bois</text>
  </g>
  
  <g class="fragment" data-fragment-index="4">
    <ellipse cx="600" cy="250" rx="150" ry="70" class="red" />
    <text x="420" y="220" class="red-text">1-rational</text>
    <text x="540" y="255" class="blue-text">...</text>
  </g>
  
  <g class="fragment" data-fragment-index="5">
    <ellipse cx="640" cy="250" rx="72" ry="40" class="blue" />
    <text x="645" y="255" class="blue-text">smooth</text>
  </g>

  <g class="fragment" data-fragment-index="6">
    <image href="sofa.png" x="-120" y="350" width="140" height="140" style="mix-blend-mode: multiply;" />
  </g> 

  <g class="fragment" data-fragment-index="7">
    <image href="dullo.png" x="15" y="220" width="140" height="140" style="mix-blend-mode: multiply;" />
  </g>

  <g class="fragment" data-fragment-index="8">
    <image href="fanfare.png" x="180" y="220" width="140" height="140" style="mix-blend-mode: multiply;" />
  </g>
  </svg>
</section>
`,T=t({default:()=>E}),E=`<section>
  <h2>Higher singularities for local complete intersections</h2>
  Let $X$ be a complex algebraic variety. <br>
  <div style="display: flex; align-items: center; justify-content: space-around; margin: 1.5em 0; font-size: 1.2em;">
    
    <div style="font-weight: bold; font-size: 0.9em;">
      Differential forms on<br>singular spaces:
    </div>
    <div class="fragment" style="text-align: center;">
      $\\Omega_X^p$<br>
      <span style="font-size: 0.8em; color: #666;">Kähler differentials</span>
    </div>
    <div class="fragment" style="text-align: center;">
      $\\underline{\\Omega}_X^p$<br>
      <span style="font-size: 0.8em; color: #666;">Du Bois complexes</span>
    </div>
  </div>

  <div class="block definition fragment">
    <div class="block-title">Definition (Mustață-Olano-Popa-Witaszek, Jung-Kim-Saito-Yoon)</div>
    <p>
      Let $X$ be a local complete intersection.
      We say $X$ is
      <strong>$m$-Du Bois</strong> if
    </p>
    $$\\Omega^p_X \\to \\underline{\\Omega}^p_X \\text{ is a quasi-isomorphism for all } p \\leq m.$$
  </div>
  <div class="fragment">
    <div class="block definition">
      <div class="block-title">Definition (Friedman-Laza)</div>
      <p>
        We say $X$ is
        <strong>$m$-rational</strong> if
      </p>
      $$
        \\Omega^p_X \\to \\mathbf{R}\\mathcal{H}om(\\underline{\\Omega}_X^{n-p}, \\omega_X^\\bullet)[-n]
        \\text{ is a quasi-isomorphism for all } p \\leq m,
      $$
      where $n=\\dim X$.
    </div>
  </div>
</section>
<section>
  
  <div class="block theorem">
  <div class="block-title">Theorem (Mustață-Olano-Popa-Witaszek, Jung-Kim-Saito-Yoon, Mustață-Popa, Saito, Chen-Dirks-Mustață-Olano)</div>
  <p>
    Suppose $X$ is a local complete intersection of
    codimension $r$. Then
  $$X \\text{ is } m\\text{-Du Bois} \\iff \\tilde{\\alpha}_X \\geq m + r$$
  $$X \\text{ is } m\\text{-rational} \\iff \\tilde{\\alpha}_X > m + r$$
  where $\\tilde{\\alpha}_X$ is the minimal exponent of $X$.
  </p>
</div>
</section>
<section>
  <div style="position: relative; width: 1100px; height: 500px; margin: 0 auto; font-size: 1.0em; white-space: nowrap;">
    <!-- DB row -->
    <div style="position: absolute; left: 50px; top: 100px; transform: translate(-50%, -50%);">$0\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 140px; top: 100px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 230px; top: 100px; transform: translate(-50%, -50%);">$1\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 320px; top: 100px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 410px; top: 100px; transform: translate(-50%, -50%);">$2\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 500px; top: 100px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 590px; top: 100px; transform: translate(-50%, -50%);">$3\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 680px; top: 100px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 770px; top: 100px; transform: translate(-50%, -50%);">$\\dots$</div>
    <div style="position: absolute; left: 860px; top: 100px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 970px; top: 100px; transform: translate(-50%, -50%);">$\\lceil \\frac{n}{2} \\rceil\\text{-Du Bois}$</div>

    <!-- rat row -->
    <div style="position: absolute; left: 50px; top: 250px; transform: translate(-50%, -50%);">$0\\text{-rational}$</div>
    <div style="position: absolute; left: 140px; top: 250px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 230px; top: 250px; transform: translate(-50%, -50%);">$1\\text{-rational}$</div>
    <div style="position: absolute; left: 320px; top: 250px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 410px; top: 250px; transform: translate(-50%, -50%);">$2\\text{-rational}$</div>
    <div style="position: absolute; left: 500px; top: 250px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 590px; top: 250px; transform: translate(-50%, -50%);">$3\\text{-rational}$</div>
    <div style="position: absolute; left: 680px; top: 250px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 770px; top: 250px; transform: translate(-50%, -50%);">$\\dots$</div>
    <div style="position: absolute; left: 860px; top: 250px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 970px; top: 250px; transform: translate(-50%, -50%);">$\\lceil \\frac{n}{2} \\rceil\\text{-rational}$</div>

    <!-- Vertical equals and smooth -->
    <div class="fragment" data-fragment-index="4">
      <!-- smooth -->
      <div style="position: absolute; left: 970px; top: 400px; transform: translate(-50%, -50%);">smooth</div>
      <div style="position: absolute; left: 970px; top: 175px; transform: translate(-50%, -50%); color: #cc3333;">$\\Vert$</div>
      <div style="position: absolute; left: 970px; top: 325px; transform: translate(-50%, -50%); color: #cc3333;">$\\Vert$</div>
    </div>

    <!-- Diagonal green arrows (k-DB to (k-1)-rat) -->
    <div class="fragment" data-fragment-index="3">
      <!-- 1-DB to 0-rat: mid is (140, 175) -->
      <div style="position: absolute; left: 140px; top: 175px; transform: translate(-50%, -50%) rotate(-40deg); color: #77ab59;">$\\impliedby$</div>
      <!-- 2-DB to 1-rat: mid is (320, 175) -->
      <div style="position: absolute; left: 320px; top: 175px; transform: translate(-50%, -50%) rotate(-40deg); color: #77ab59;">$\\impliedby$</div>
      <!-- 3-DB to 2-rat: mid is (500, 175) -->
      <div style="position: absolute; left: 500px; top: 175px; transform: translate(-50%, -50%) rotate(-40deg); color: #77ab59;">$\\impliedby$</div>
      <!-- dots to 3-rat: mid is (680, 175) -->
      <div style="position: absolute; left: 680px; top: 175px; transform: translate(-50%, -50%) rotate(-40deg); color: #77ab59;">$\\impliedby$</div>
    </div>

    <!-- Vertical red arrows (k-rat to k-DB) -->
    <!-- Leftmost arrow (0-rat to 0-DB) -->
    <div class="fragment" data-fragment-index="1">
      <div style="position: absolute; left: 50px; top: 175px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
      <div style="position: absolute; left: 30px; top: 175px; transform: translate(-100%, -50%); color: #cc3333; font-size: 0.6em; text-align: right; line-height: 1.2;">
        Kovács'99<br>Saito'00
      </div>
    </div>

    <!-- Other vertical arrows -->
    <div class="fragment" data-fragment-index="2">
      <div style="position: absolute; left: 230px; top: 175px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
      <div style="position: absolute; left: 410px; top: 175px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
      <div style="position: absolute; left: 590px; top: 175px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
    </div>
  </div>
</section>
 <section>
  <svg viewBox="0 0 1000 500" width="100%" height="600px">
    <style>
      .blue { stroke: #00008B; fill: none; stroke-width: 2; }
      .red { stroke: #8B0000; fill: none; stroke-width: 2; }
      .blue-text { fill: #00008B; font-family: sans-serif; font-size: 24px; }
      .red-text { fill: #8B0000; font-family: sans-serif; font-size: 24px; }
      .orange-text { fill: #D2691E; font-family: sans-serif; font-size: 20px; }
      .dot { fill: #D2691E; }
    </style>

    <!-- Ellipses -->
    <g class="fragment" data-fragment-index="1">
      <ellipse cx="500" cy="250" rx="450" ry="220" class="blue" />
      <text x="250" y="100" class="blue-text">DB</text>
    </g>
    
    <g class="fragment" data-fragment-index="2">
      <ellipse cx="520" cy="250" rx="300" ry="160" class="red" />
      <text x="380" y="140" class="red-text">rat</text>
    </g>
    
    <g class="fragment" data-fragment-index="3">
      <ellipse cx="570" cy="250" rx="200" ry="100" class="blue" />
      <text x="500" y="180" class="blue-text">1-DB</text>
    </g>
    
    <g class="fragment" data-fragment-index="4">
      <ellipse cx="640" cy="250" rx="80" ry="55" class="red" />
      <text x="630" y="220" class="red-text">1-rat</text>
      <text x="610" y="255" class="blue-text">...</text>
    </g>
    
    <g class="fragment" data-fragment-index="5">
      <ellipse cx="680" cy="250" rx="35" ry="25" class="blue" />
      <text x="665" y="255" class="blue-text">sm</text>
    </g>

    <!-- Orange Dots and Texts -->
    <g class="fragment" data-fragment-index="6">
      <circle cx="880" cy="100" r="4" class="dot" />
      <text x="830" y="90" class="orange-text">cuspidal cubic</text>
    </g>
    
    <g class="fragment" data-fragment-index="7">
      <circle cx="200" cy="280" r="4" class="dot" />
      <text x="60" y="270" class="orange-text">cones over CY</text>
    </g>
    
    <g class="fragment" data-fragment-index="8">
      <circle cx="850" cy="210" r="4" class="dot" />
      <text x="830" y="190" class="orange-text">nodal</text>
      <text x="830" y="235" class="orange-text">cubic</text>
    </g>

    <g class="fragment" data-fragment-index="9">
      <circle cx="350" cy="200" r="4" class="dot" />
      <text x="250" y="180" class="orange-text">hypersurface</text>
      <text x="250" y="205" class="orange-text">toric variety</text>
    </g>
    
    <g class="fragment" data-fragment-index="10">
      <circle cx="450" cy="380" r="4" class="dot" />
      <text x="390" y="370" class="orange-text">cones over Fano</text>
    </g>

    <g class="fragment" data-fragment-index="11">
      <circle cx="480" cy="250" r="4" class="dot" />
      <text x="390" y="230" class="orange-text">determinantal</text>
      <text x="390" y="275" class="orange-text">hypersurface</text>
    </g>
  </svg>
  <div style="position: absolute; bottom: 10px; right: 10px; font-size: 0.5em; color: #666;">image credit - Anh Duc Vo</div>
</section>
`,D=t({default:()=>O}),O=`<section>
  <h2>Beyond local complete intersections</h2>
  <p>
    The conditions $\\Omega_X^1 \\to \\underline{\\Omega}_X^1$ is very restrictive!
  </p>
  <!-- A construction worker setting a brick on a half-built wall of
       invariants, next to a traffic cone. -->
  <svg viewBox="0 0 420 270" width="420" height="270" role="img"
       aria-label="A construction worker in a hard hat placing a brick on a half-built wall"
       style="display: block; margin: 0 auto;">
    <!-- ground -->
    <line x1="20" y1="252" x2="410" y2="252" stroke="#c9c4b8" stroke-width="2" stroke-linecap="round" />

    <!-- traffic cone -->
    <path d="M48 247 L62 188 L76 247 Z" fill="#f28c28" />
    <path d="M55.5 216 L68.5 216 L71 226 L53 226 Z" fill="#fbfaf7" />
    <path d="M59 201 L65 201 L66.5 208 L57.5 208 Z" fill="#fbfaf7" />
    <rect x="40" y="245" width="44" height="7" rx="2" fill="#d9731a" />

    <!-- the wall: bottom rows complete, top row unfinished -->
    <g fill="#b5523b" stroke="#8f3d2b" stroke-width="1.2">
      <rect x="250" y="230" width="44" height="20" rx="2" />
      <rect x="298" y="230" width="44" height="20" rx="2" />
      <rect x="346" y="230" width="44" height="20" rx="2" />
      <rect x="272" y="208" width="44" height="20" rx="2" />
      <rect x="320" y="208" width="44" height="20" rx="2" />
      <rect x="250" y="208" width="18" height="20" rx="2" />
      <rect x="368" y="208" width="22" height="20" rx="2" />
      <rect x="250" y="186" width="44" height="20" rx="2" />
      <rect x="298" y="186" width="44" height="20" rx="2" />
      <rect x="346" y="186" width="44" height="20" rx="2" />
      <rect x="272" y="164" width="44" height="20" rx="2" />
      <rect x="250" y="164" width="18" height="20" rx="2" />
    </g>
    <g fill="#fbfaf7" font-family="Georgia, serif" font-style="italic" font-size="12" text-anchor="middle">
      <text x="272" y="244">K</text>
      <text x="320" y="244">KH</text>
      <text x="368" y="244">HH</text>
      <text x="294" y="222">Ω</text>
      <text x="342" y="222">Gr<tspan font-size="8" dy="3">F</tspan></text>
    </g>

    <!-- worker: legs and boots -->
    <rect x="122" y="184" width="15" height="60" rx="3" fill="#21212e" />
    <rect x="143" y="184" width="15" height="60" rx="3" fill="#21212e" />
    <rect x="116" y="240" width="23" height="10" rx="3" fill="#5b3a1a" />
    <rect x="141" y="240" width="23" height="10" rx="3" fill="#5b3a1a" />

    <!-- arms (drawn under the torso) -->
    <polyline points="122,134 110,160 106,180" fill="none" stroke="#4a6fa5" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="106" cy="184" r="6" fill="#e8b98f" />
    <g class="brick-arm">
      <polyline points="158,134 186,124 208,104" fill="none" stroke="#4a6fa5" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="211" cy="100" r="6" fill="#e8b98f" />
    </g>

    <!-- torso: shirt, then safety vest with reflective stripe -->
    <rect x="118" y="124" width="44" height="66" rx="10" fill="#4a6fa5" />
    <path d="M118 134 Q118 124 128 124 L134 124 L134 190 L118 190 Z" fill="#f28c28" />
    <path d="M162 134 Q162 124 152 124 L146 124 L146 190 L162 190 Z" fill="#f28c28" />
    <rect x="118" y="160" width="16" height="6" fill="#fde68a" />
    <rect x="146" y="160" width="16" height="6" fill="#fde68a" />

    <!-- head and hard hat -->
    <rect x="135" y="116" width="10" height="10" fill="#e8b98f" />
    <circle cx="140" cy="104" r="18" fill="#e8b98f" />
    <circle cx="146" cy="103" r="1.8" fill="#21212e" />
    <path d="M143 112 Q148 115 152 111" fill="none" stroke="#21212e" stroke-width="1.6" stroke-linecap="round" />
    <path d="M120 100 A20 20 0 0 1 160 100 Z" fill="#f5b700" />
    <rect x="116" y="97" width="52" height="6" rx="3" fill="#e0a500" />
    <rect x="137" y="81" width="6" height="12" rx="2" fill="#e0a500" />

    <!-- the next brick, on its way to the top of the wall; on a key press
         (.brick-cue) it is lobbed into the gap there (see custom.css) -->
    <g class="brick-lob">
      <g transform="rotate(-8 234 94)">
        <rect x="212" y="84" width="44" height="20" rx="2" fill="#b5523b" stroke="#8f3d2b" stroke-width="1.2" />
        <text x="234" y="98" fill="#fbfaf7" font-family="Georgia, serif" font-style="italic" font-size="12" text-anchor="middle">?</text>
      </g>
    </g>
    <g class="fragment brick-cue"></g>
  </svg>
  <p style="text-align: center; font-size: 1.3em; font-style: italic; color: var(--crimson); margin: 0.8rem 0 0;">
    The theory is still under construction&hellip;
  </p>
</section>

<section>
  <div class="block definition">
    <div class="block-title">Definition (S.-Venkatesh-Vo)</div>
    <p>
      $X$ is <strong>pre-$m$-Du Bois</strong> if $\\mathcal{H}^i(\\underline{\\Omega}^p_X) = 0$ for all $p \\leq m$ and $i > 0$.
    </p>
    <p>
      $X$ is <strong>pre-$m$-rational</strong> if
      $\\mathcal{E}xt^{i-n}(\\underline{\\Omega}_X^{n-p}, \\omega_X^\\bullet)$
      is a quasi-isomorphism for all $p \\leq m$ and $i>0$, where $n=\\dim X$.
    </p>
  </div>
  <div class="block theorem">
    <div class="block-title">Theorem</div>
    <p>
      \\[
        \\text{pre-}k\\text{-rational} \\iff \\text{pre-}k\\text{-Du Bois} + \\text{condition } D_k,
      \\]
      where condition $D_k$ is due to Park&ndash;Popa and Dirks&ndash;Olano&ndash;Raychaudhury.
    </p>
  </div>
</section>

<section>
  <div class="block theorem">
    <div class="block-title">Theorem (S.-Venkatesh-Vo)</div>
    <p>
      If $X$ is normal, then
      \\[
        \\text{pre-}m\\text{-rational} \\implies \\text{pre-}m\\text{-Du Bois}.
      \\]
      However, $\\text{pre-}m\\text{-rational}$ does not imply $\\text{pre-}(m-1)\\text{-rational}$.
    </p>
  </div>
  <div class="block remark fragment">
    <div class="block-title">Remark</div>
    <p>
      Imposing more conditions gives definition of $m$-Du Bois and $m$-rational singularities that:
    </p>
    <ul>
      <li>agrees with the notions in the literature when $m=0$, or when $X$ is lci;</li>
      <li>include more examples in general.</li>
    </ul>
  </div>
</section>
<section>
  <div style="position: relative; width: 1000px; height: 400px; margin: 0 auto; font-size: 0.75em; white-space: nowrap;">
    <!-- DB row -->
    <div style="position: absolute; left: 50px; top: 80px; transform: translate(-50%, -50%);">$\\text{pre-}0\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 150px; top: 80px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 250px; top: 80px; transform: translate(-50%, -50%);">$\\text{pre-}1\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 350px; top: 80px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 450px; top: 80px; transform: translate(-50%, -50%);">$\\text{pre-}2\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 550px; top: 80px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 650px; top: 80px; transform: translate(-50%, -50%);">$\\text{pre-}3\\text{-Du Bois}$</div>
    <div style="position: absolute; left: 730px; top: 80px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 810px; top: 80px; transform: translate(-50%, -50%);">$\\dots$</div>
    <div style="position: absolute; left: 890px; top: 80px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 970px; top: 80px; transform: translate(-50%, -50%);">$\\text{pre-}n\\text{-Du Bois}$</div>

    <!-- rat row -->
    <div style="position: absolute; left: 50px; top: 240px; transform: translate(-50%, -50%);">$\\text{pre-}0\\text{-rational}$</div>
    <div style="position: absolute; left: 150px; top: 240px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 250px; top: 240px; transform: translate(-50%, -50%);">$\\text{pre-}1\\text{-rational}$</div>
    <div style="position: absolute; left: 350px; top: 240px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 450px; top: 240px; transform: translate(-50%, -50%);">$\\text{pre-}2\\text{-rational}$</div>
    <div style="position: absolute; left: 550px; top: 240px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 650px; top: 240px; transform: translate(-50%, -50%);">$\\text{pre-}3\\text{-rational}$</div>
    <div style="position: absolute; left: 730px; top: 240px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 810px; top: 240px; transform: translate(-50%, -50%);">$\\dots$</div>
    <div style="position: absolute; left: 890px; top: 240px; transform: translate(-50%, -50%);">$\\impliedby$</div>
    <div style="position: absolute; left: 970px; top: 240px; transform: translate(-50%, -50%);">$\\text{pre-}n\\text{-rational}$</div>

    <!-- Vertical arrows and smooth -->
    <div class="fragment" data-fragment-index="1">
      <div style="position: absolute; left: 970px; top: 160px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
    </div>

    <!-- Diagonal green arrows (k-DB to (k-1)-rat) -->
    <div class="fragment" data-fragment-index="2">
      <!-- 1-DB to 0-rat: mid is (150, 160) -->
      <div style="position: absolute; left: 150px; top: 160px; transform: translate(-50%, -50%) rotate(135deg); color: #77ab59;">$\\not\\Longrightarrow$</div>
      <!-- 2-DB to 1-rat: mid is (350, 160) -->
      <div style="position: absolute; left: 350px; top: 160px; transform: translate(-50%, -50%) rotate(135deg); color: #77ab59;">$\\not\\Longrightarrow$</div>
      <!-- 3-DB to 2-rat: mid is (550, 160) -->
      <div style="position: absolute; left: 550px; top: 160px; transform: translate(-50%, -50%) rotate(135deg); color: #77ab59;">$\\not\\Longrightarrow$</div>
      <!-- dots to 3-rat: mid is (730, 160) -->
      <div style="position: absolute; left: 730px; top: 160px; transform: translate(-50%, -50%) rotate(135deg); color: #77ab59;">$\\not\\Longrightarrow$</div>
    </div>

    <!-- Vertical red arrows (k-rat to k-DB) -->
    <!-- Leftmost arrow (0-rat to 0-DB) -->
    <div class="fragment" data-fragment-index="1">
      <div style="position: absolute; left: 50px; top: 160px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
    </div>

    <!-- Other vertical arrows -->
    <div class="fragment" data-fragment-index="1">
      <div style="position: absolute; left: 250px; top: 160px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
      <div style="position: absolute; left: 450px; top: 160px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
      <div style="position: absolute; left: 650px; top: 160px; transform: translate(-50%, -50%); color: #cc3333;">$\\Uparrow$</div>
    </div>
  </div>
</section>

<section>
  <svg viewBox="0 0 1000 500" width="100%" height="600px">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFB000" />
    </marker>
  </defs>
  <style>
    .blue { stroke: #00008B; fill: none; stroke-width: 2; }
    .red { stroke: #8B0000; fill: none; stroke-width: 2; }
    .blue-text { fill: #00008B; font-family: sans-serif; font-size: 22px; text-anchor: middle; }
    .red-text { fill: #8B0000; font-family: sans-serif; font-size: 22px; text-anchor: middle; }
    .orange-text { fill: #FFB000; font-family: sans-serif; font-size: 24px; }
    .dashed-red { stroke: #8B0000; stroke-width: 2; stroke-dasharray: 4,4; }
  </style>

  <!-- Ellipses -->
  <g class="fragment" data-fragment-index="1">
    <ellipse cx="500" cy="230" rx="450" ry="210" class="blue" />
    <text x="500" y="50" class="blue-text">pre-0-DB</text>
  </g>
  
  <g class="fragment" data-fragment-index="4">
    <ellipse cx="560" cy="230" rx="320" ry="150" class="red" />
    <text x="750" y="120" class="red-text">pre-0-rat</text>
  </g>

  <g class="fragment" data-fragment-index="2">
    <ellipse cx="440" cy="230" rx="330" ry="150" class="blue" />
    <text x="320" y="120" class="blue-text">pre-1-DB</text>
  </g>
  
  <g class="fragment" data-fragment-index="5">
5      <ellipse cx="520" cy="230" rx="180" ry="80" class="red" />
    <text x="620" y="210" class="red-text">pre-1-rat</text>
    <text x="620" y="240" class="blue-text">...</text>
  </g>
  
  <g class="fragment" data-fragment-index="3">
    <ellipse cx="380" cy="230" rx="180" ry="80" class="blue" />
    <text x="260" y="235" class="blue-text">pre-n-DB</text>
  </g>
  
  <g class="fragment" data-fragment-index="6">
    <ellipse cx="460" cy="230" rx="60" ry="30" class="red" />
    <text x="460" y="235" class="red-text">pre-n-rat</text>
  </g>

  <!-- Orange Texts and Arrows -->
  <g class="fragment" data-fragment-index="7">
    <path d="M 150 450 Q 150 350 330 260" stroke="#FFB000" stroke-width="2" fill="none" marker-end="url(#arrow)" />
    <text x="50" y="470" class="orange-text">Non-simplicial toric varieties</text>
  </g>
  
  <g class="fragment" data-fragment-index="8">
    <path d="M 650 450 Q 650 350 470 250" stroke="#FFB000" stroke-width="2" fill="none" marker-end="url(#arrow)" />
    <text x="560" y="480" class="orange-text">Quotient singularities</text>
    <text x="560" y="510" class="orange-text">Simplicial toric varieties</text>

  </g>
</svg>
<div style="position: absolute; bottom: 10px; right: 10px; font-size: 0.5em; color: #666;">image credit - Anh Duc Vo</div>
</section>
`,k=t({default:()=>A}),A=`<section class="toc-slide">
  <h2>Outline</h2>
  <ol class="toc-list">
    <li>Algebraic K-theory</li>
    <li>Higher singularities</li>
    <li class="toc-active">Higher Du Bois singularities and K-regularity</li>
    <li>What next?</li>
  </ol>
</section>
`,j=t({default:()=>M}),M=`<section>
  <h2>Low-dimensional cases</h2>
  <div class="block">
    <div class="block-title">$\\dim R = 1$</div>
    <ul>
      <li><strong>Vorst:</strong> $R$ is $K_2$-regular $\\implies$ regular</li>
      <li><strong>Traverso:</strong> $K_1$-regular $\\iff$ $K_0$-regular $\\iff$ seminormal <span class="fragment" data-fragment-index="1" style="color: #3173ac;">($\\iff$ Du Bois)</span></li>
      <li><strong>Weibel:</strong> $R$ is always $K_{-1}$-regular</li>
    </ul>
  </div>
  <div class="block fragment" data-fragment-index="2">
    <div class="block-title">$\\dim R = 2$, normal <span class="fragment" data-fragment-index="4" style="font-weight: normal; font-size: 0.85em; color: #a51c30;">($\\iff R_1 + S_2$ by Serre's criterion)</span></div>
    <ul>
      <li><strong>Weibel:</strong> $R$ is always $K_{-2}$-regular</li>
      <li>$K_{-1}$-regular $\\iff$ $K_0$-regular $\\iff$ $H^1(E, \\mathcal{I}/\\mathcal{I}^n)=0$ for all $n\\ge 2$, where $\\mathcal{I}\\subset \\mathcal{O}_{\\tilde X}$ is the ideal sheaf defining $E$ <span class="fragment" data-fragment-index="3" style="color: #3173ac;">($\\iff$ Du Bois)</span></li>
      <li>No known example of $K_1$-regular normal surface</li>
    </ul>
  </div>
</section>
`,te=t({default:()=>N}),N=`<section>
  <h2>$K$-regularity and higher Du Bois singularities</h2>
  <div class="fragment">
    <div class="block theorem">
      <div class="block-title">Theorem (S.)</div>
      <p>
        Let $X$ be an affine complex variety of
        dimension $d$, and
        $s = \\dim X_{\\mathrm{sing}}$. Then
      </p>
      <ol>
        <li class="fragment">
          pre-$m$-DB
          $\\Longrightarrow$
          $K_t$-regularity for $t\\le \\min\\{-d+2m+2, 0\\}$.
        </li>
        <li class="fragment">
          Suppose either of the following holds:
          <ul>
            <li>$X$ is a local complete intersection;</li>
            <li>$\\operatorname{depth} \\mathcal{H}^0\\underline{\\Omega}_X^p \\geq d-p$ for all $p \\geq 0$.</li>
          </ul>
          If $X$ is $K_{-d+2m+1+s}$-regular, then it is pre-$m$-DB.
        </li>
      </ol>
    </div>
  </div>
  <div class="block corollary fragment">
    <div class="block-title">Corollary</div>
    <div>
      If $X$ is affine and a local complete intersection, then
      <p style="text-align: center; margin-top: 1em; padding-bottom: 2em;">
        $K_2\\text{-regular} \\implies$ 
        <span style="position: relative; display: inline-block;">
          pre-
          <span class="fragment" style="position: absolute; left: 0; top: 50%; width: 100%; border-top: 0.15em solid #a51c30;"></span>
        </span>          $m\\text{-Du Bois for } m = \\left\\lfloor \\frac{d-s+1}{2} \\right\\rfloor$
        <span style="position: relative; display: inline-block;">
          $\\implies$
          <span class="fragment" style="position: absolute; top: 2.2em; left: 50%; transform: translateX(-50%); font-size: 0.6em; color: #4a6fa5; white-space: nowrap; line-height: 1.2; text-align: center;">
            JKSY, MOPW,<br>MP, CDMO
          </span>
        </span>
        $\\text{smooth}.$
      </p>
    </div>
  </div>
</section>

<section>
  <h2>Local complete intersection with $\\dim X_{\\mathrm{sing}} = 0$</h2>
  
  <div class="block corollary" style="margin-bottom: 2rem;">
    <div class="block-title">Corollary</div>
    <p>
      If $X$ is a local complete intersection with isolated singularities, then
    </p>
    <table style="margin: 0 auto; border: none; border-collapse: collapse;">
      <tr>
        <td style="text-align: right; border: none; padding: 0.2em 0.5em;">$m$-Du Bois</td>
        <td style="text-align: center; border: none; padding: 0.2em 0.5em;">$\\iff$</td>
        <td style="text-align: left; border: none; padding: 0.2em 0.5em;">$K_{-d+2m+2}$-regular $\\iff$ $K_{-d+2m+1}$-regular</td>
      </tr>
      <tr>
        <td style="border: none;"></td>
        <td style="text-align: center; border: none; padding: 0.2em 0.5em; padding-bottom: 2.5em;">
          <span style="position: relative; display: inline-block;">
            $\\iff$
            <span class="fragment" style="position: absolute; top: 2.2em; left: 50%; transform: translateX(-50%); font-size: 0.6em; color: #4a6fa5; white-space: nowrap; line-height: 1.2; text-align: center;">
              JKSY, MOPW,<br>MP, CDMO
            </span>
          </span>
        </td>
        <td style="text-align: left; border: none; padding: 0.2em 0.5em; padding-bottom: 2.5em;">$\\tilde{\\alpha}_X \\geq m+r$</td>
      </tr>
    </table>
  </div>

  <div class="fragment">
    <p>
      $$
      \\begin{array}{ccc}
        K_{-d+1}\\text{-regular} & & \\\\
         \\Updownarrow & & \\\\
        K_{-d+2}\\text{-regular} & \\iff & \\text{Du Bois} \\\\
        \\Uparrow & & \\\\
        K_{-d+3}\\text{-regular} & & \\\\
        \\Updownarrow & & \\\\
        K_{-d+4}\\text{-regular} & \\iff & 1\\text{-Du Bois} \\\\
        \\Uparrow & & \\\\
        \\vdots & &
      \\end{array}
      $$
    </p>
  </div>
</section>

<section>
  <h2>$\\dim X_{\\mathrm{sing}} = 1$</h2>
  <div class="block corollary">
    <p>
      $$
      \\begin{array}{ccc}
        K_{-d+1}\\text{-regular} & & \\\\
        \\Uparrow & & \\\\
        K_{-d+2}\\text{-regular} & \\iff & \\text{Du Bois} \\\\
        \\Uparrow & & \\\\
        K_{-d+3}\\text{-regular} & & \\\\
        \\Uparrow & & \\\\
        K_{-d+4}\\text{-regular} & \\iff & 1\\text{-Du Bois} \\\\
        \\Uparrow & & \\\\
        \\vdots & &
      \\end{array}
      $$
    </p>
  </div>
</section>

<section>
  <h2>$\\dim X_{\\mathrm{sing}} = s$</h2>
  <div class="block corollary">
    <p style="text-align: center;">
      $K_{-d+2m+s}\\text{-regular} \\implies m\\text{-Du Bois} \\implies K_{-d+2m+2}\\text{-regular}$.
    </p>
  </div>
</section>
`,P=t({default:()=>F}),F=`<section>
  <style>
  .proof-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 30px;
  }

  #db-reg-table {
    margin: 0;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.7em;
    background: rgba(128, 128, 128, 0.05);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(128, 128, 128, 0.2);
    table-layout: fixed;
    width: 645px;
  }
  
  #db-reg-table th, #db-reg-table td {
    padding: 12px 8px;
    border: 1px solid rgba(128, 128, 128, 0.2);
    text-align: center;
    width: 85px;
    height: 45px;
    transition: background-color 0.2s;
    overflow: hidden;
  }

  #db-reg-table th:first-child {
    width: 50px;
  }
  
  #db-reg-table th {
    background: rgba(128, 128, 128, 0.15);
    font-weight: 600;
  }
  
  #db-reg-table td:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  .controls-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 0.8em;
    text-align: left;
    background: rgba(128, 128, 128, 0.08);
    padding: 20px 25px;
    border-radius: 12px;
    border: 1px solid rgba(128, 128, 128, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    min-width: 150px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .label-text {
    font-weight: 500;
    opacity: 0.9;
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .input-row label {
    font-weight: 500;
    opacity: 0.9;
  }
  
  .input-row input {
    width: 70px;
    font-size: 1.1em;
    padding: 8px 10px;
    border: 1px solid rgba(128, 128, 128, 0.4);
    border-radius: 8px;
    background: var(--r-background-color, #fff);
    color: var(--r-main-color, #333);
    transition: all 0.2s ease;
    font-family: inherit;
  }
  
  .input-row input:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
  
  .action-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
  }
  
  .action-buttons button {
    font-size: 0.75em;
    font-weight: 600;
    padding: 12px 24px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background: #4a90e2;
    color: white;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px rgba(74, 144, 226, 0.2);
    font-family: inherit;
    letter-spacing: 0.5px;
  }
  
  .action-buttons button:hover {
    background: #357abd;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(74, 144, 226, 0.3);
  }
  
  .action-buttons button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(74, 144, 226, 0.2);
  }
</style>

<h2>Du Bois invariants</h2>

<div class="proof-container">
  <table id="db-reg-table">
  <thead>
    <tr>
      <th>$q \\setminus p$</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td id="cell-0-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{0}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-1-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{1}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-2-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{2}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-3-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{3}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-4-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{4}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-5-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{5}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-6-1"><span class="math-content">$\\mathcal{H}^{1} \\underline{\\Omega}^{6}$</span><span class="zero-content" style="display:none;">0</span></td>
    </tr>
    <tr>
      <th>2</th>
      <td id="cell-0-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{0}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-1-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{1}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-2-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{2}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-3-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{3}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-4-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{4}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-5-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{5}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-6-2"><span class="math-content">$\\mathcal{H}^{2} \\underline{\\Omega}^{6}$</span><span class="zero-content" style="display:none;">0</span></td>
    </tr>
    <tr>
      <th>3</th>
      <td id="cell-0-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{0}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-1-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{1}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-2-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{2}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-3-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{3}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-4-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{4}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-5-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{5}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-6-3"><span class="math-content">$\\mathcal{H}^{3} \\underline{\\Omega}^{6}$</span><span class="zero-content" style="display:none;">0</span></td>
    </tr>
    <tr>
      <th>4</th>
      <td id="cell-0-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{0}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-1-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{1}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-2-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{2}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-3-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{3}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-4-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{4}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-5-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{5}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-6-4"><span class="math-content">$\\mathcal{H}^{4} \\underline{\\Omega}^{6}$</span><span class="zero-content" style="display:none;">0</span></td>
    </tr>
    <tr>
      <th>5</th>
      <td id="cell-0-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{0}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-1-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{1}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-2-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{2}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-3-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{3}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-4-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{4}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-5-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{5}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-6-5"><span class="math-content">$\\mathcal{H}^{5} \\underline{\\Omega}^{6}$</span><span class="zero-content" style="display:none;">0</span></td>
    </tr>
    <tr>
      <th>6</th>
      <td id="cell-0-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{0}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-1-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{1}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-2-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{2}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-3-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{3}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-4-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{4}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-5-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{5}$</span><span class="zero-content" style="display:none;">0</span></td>
      <td id="cell-6-6"><span class="math-content">$\\mathcal{H}^{6} \\underline{\\Omega}^{6}$</span><span class="zero-content" style="display:none;">0</span></td>
    </tr>
  </tbody>
</table>

  <div class="controls-panel">
    <div class="input-group">
      <div class="label-text">$m$-Du Bois</div>
      <div class="input-row">
        <label for="m-db-input"> $m = $</label>
        <input type="number" id="m-db-input" min="-1" max="6" value="-1">
      </div>
    </div>
    <div class="input-group">
      <div class="label-text">$K_t$-regular</div>
      <div class="input-row">
        <label for="t-reg-input"> $t = $</label>
        <input type="number" id="t-reg-input" min="-7" max="6" value="-7">
      </div>
    </div>
  </div>
</div>

<div class="action-buttons">
  <button id="steenbrink-btn">Steenbrink vanishing</button>
  <button id="lci-isolated-btn">lci, isolated</button>
  <button id="lci-dim1-btn">lci, dim X_sing=1</button>
  <button id="extra-vanishing-btn">extra vanishing</button>
</div>
</section>
<section>
  <h2>Vanishing theorems for Du Bois complexes</h2>
  <ul>
    <li><strong>Steenbrink:</strong> lci, isolated</li>
    <li><strong>Mustață-Popa:</strong> lci</li>
    <li><strong>Popa-S.-Vo:</strong> isolated + extra vanishing</li>
    <!-- <li><strong>Kovács:</strong> general</li> -->
  </ul>
</section>
`,ne=t({default:()=>I}),I=`<section class="toc-slide">
  <h2>Outline</h2>
  <ol class="toc-list">
    <li>Algebraic K-theory</li>
    <li>Higher singularities</li>
    <li>Higher Du Bois singularities and K-regularity</li>
    <li class="toc-active">What next?</li>
  </ol>
</section>
`,re=t({default:()=>ie}),ie=`<section>
  <h2>How to study $K$-groups</h2>
  <div style="font-size: 1.5em; margin: 1.2em 0; display: flex; flex-direction: column; align-items: center;">
    <div style="font-size: 0.35em; margin-bottom: -1em; z-index: 1; transform: translateX(-1.5em);">$K$-regularity</div>
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 2em;">
      $K$ <span style="display: inline-block; transform: scaleX(3); margin: 0 2em;">$\\leftrightsquigarrow$</span> 
      <div style="position: relative;">
        $KH$
        <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); font-size: 0.4em; color: black; white-space: nowrap; margin-top: 0.5em; font-family: var(--r-main-font);">
          (Weibel's homotopy $K$-theory)
        </div>
      </div>
    </div>
  </div>
  <ul>
    <li>Study the $KH$ using descent</li>
    <li>Relate $KH$ to $K$ by $K$-regularity</li>
  </ul>
</section>
`,ae=t({default:()=>oe}),oe=`<section>
  <h2>Further questions</h2>
  <div class="block question">
    <div class="block-title">Question 1</div>
    <p>
      How does higher rational singularities show up in the $K$-theory of singular varieties?
    </p>
  </div>
  <div style="display: grid; grid-template-columns: auto auto auto; gap: 0.5em 1.5em; align-items: center; justify-content: center; font-size: 1.3em; margin-top: 1em;">
    <div class="fragment" data-fragment-index="1" style="text-align: center;">pre-$k$-rational</div>
    <div class="fragment" data-fragment-index="4" style="text-align: center;">
      <span style="position: relative; display: inline-block;">
        $\\implies$
        <span style="position: absolute; bottom: 1.8em; left: 50%; transform: translateX(-50%); font-size: 0.6em; color: #4a6fa5; white-space: nowrap; line-height: 1.2;">
          Conjecture
        </span>
      </span>
    </div>
    <div class="fragment" data-fragment-index="4" style="text-align: left;">vanishing of $K_{\\mathbb{Q}}$</div>
    
    

    <div class="fragment" data-fragment-index="1" style="text-align: center;">$\\Updownarrow$</div>
    <div></div>
    <div></div>

    <div class="fragment" data-fragment-index="1" style="text-align: center;">pre-$k$-Du Bois</div>
    <div class="fragment" data-fragment-index="2" style="text-align: center;">
      <span style="position: relative; display: inline-block;">
        $\\implies$
        <span style="position: absolute; bottom: 1.8em; left: 50%; transform: translateX(-50%); font-size: 0.6em; color: #4a6fa5; white-space: nowrap; line-height: 1.2;">
          Theorem
        </span>
      </span>
    </div>
    <div class="fragment" data-fragment-index="2" style="text-align: left;">$K$-regularity</div>

    <div class="fragment" data-fragment-index="1" style="text-align: center;">$+$</div>
    <div></div>
    <div></div>

    <div class="fragment" data-fragment-index="1" style="text-align: center;">condition $D_k$</div>
    <div class="fragment" data-fragment-index="3" style="text-align: center;">
      <span style="position: relative; display: inline-block;">
        $\\implies$
        <span style="position: absolute; bottom: 1.9em; left: 50%; transform: translateX(-50%); font-size: 0.6em; color: #4a6fa5; white-space: nowrap; line-height: 1.2;">
          Conjecture<br>(Burke-Popa-S)
        </span>
      </span>
    </div>
    <div class="fragment" data-fragment-index="3" style="text-align: left;">vanishing of $KH_{\\mathbb{Q}}$</div>
  </div>
</section>

<section style="font-size: 0.9em;">
  <!-- Conjecture B of Burke–Popa–Shen, arXiv:2607.12672 -->
  <div class="block theorem">
    <div class="block-title">Conjecture B</div>
    <p>
      Let $X$ be a complex variety of dimension $n$, and fix an integer $i > 0$.
      If $W_{j-i}H^j(X, \\mathbb{Q}) = 0$ for all $j \\leq 2n-i$, then
      \\[KH_{-i}(X)_{\\mathbb{Q}} = 0,\\]
      i.e. $KH_{-i}(X)$ is torsion.
    </p>
  </div>
  <p>We show this is true:</p>
  <ul>
    <li class="fragment">in dimensions $1$ and $2$;</li>
    <li class="fragment">for $i = n, n-1$, in all dimensions;</li>
    <li class="fragment">for threefolds with isolated klt type singularities;</li>
    <li class="fragment">for toric varieties and finite quotients.</li>
  </ul>
  <div class="block question fragment">
    <div class="block-title">Simplest open case</div>
    <p>When $X$ is a rational homology manifold.</p>
  </div>
</section>

<section>
  <div class="block question">
    <div class="block-title">Question 2</div>
    <p>
      For an affine variety $X$ in char $0$: is every $K_2$-regular $X$ smooth?
    </p>
  </div>
  <p>True for:</p>
  <ul>
    <li class="fragment">local complete intersections (S., 2025);</li>
    <li class="fragment">toric varieties (Haesemeyer and G. Henderson-Walshe, 2026);</li>
    <li class="fragment">finite quotients (Satriano&ndash;S., 2026);</li>
    <li class="fragment">generic determinantal varieties (ChatGPT 6 Astra).</li>
  </ul>
  <div class="block question fragment">
    <div class="block-title">Simplest open case</div>
    <p>When $X$ is a reductive quotient.</p>
  </div>
</section>

<section>
  <div class="block question">
    <div class="block-title">Question 3</div>
    <p>
      Higher Du Bois $\\iff$ $K$-regularity in char 0
    </p>
    <p>
      Higher $F$-injectivity $\\stackrel{?}{\\iff}$ $K$-regularity in char $p$
    </p>
    <p>
      <strong>Motivation:</strong> Vorst's conjecture, Bass' question both open in char $p$.
    </p>
  </div>
  <div class="block question fragment">
    <div class="block-title">Vague question</div>
    <ul>
      <li>How do other newly introduced notions (e.g. by Chen&ndash;Dirks&ndash;Olano) relate to <span style="white-space: nowrap;">$K$-theory</span>?</li>
      <li>Any deeper connection?</li>
    </ul>
  </div>
</section>
`,se=t({default:()=>ce}),ce=`<section class="end-slide" data-transition="fade">
  <div class="title-decor" aria-hidden="true">
    <svg viewBox="0 0 960 700">
      <defs>
        <linearGradient id="end-node-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="-343" x2="0" y2="343">
          <stop offset="0%" stop-color="#a51c30" stop-opacity="0" />
          <stop offset="32%" stop-color="#a51c30" stop-opacity="1" />
          <stop offset="68%" stop-color="#a51c30" stop-opacity="1" />
          <stop offset="100%" stop-color="#a51c30" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="end-cusp-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="336" y2="0">
          <stop offset="0%" stop-color="#4a6fa5" stop-opacity="1" />
          <stop offset="55%" stop-color="#4a6fa5" stop-opacity="1" />
          <stop offset="100%" stop-color="#4a6fa5" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Drawing shifted +350px: the svg box hangs above the slide midline
           (see .title-decor) so the picture must be drawn one half-height
           lower to land on the slide. Composition is the title slide's,
           point-mirrored through the slide center. -->
      <g transform="translate(0 350)">

      <!-- nodal cubic y² = x²(x+1), node marked at the origin -->
      <g transform="translate(790 140) rotate(-10)" opacity="0.1">
        <path
          fill="none"
          stroke="url(#end-node-stroke)"
          stroke-width="2.5"
          d="M 309.4 -342.9 C 265.6 -278.1, 225.0 -223.6, 187.5 -178.1 C 150.0 -132.6, 115.6 -96.0, 84.4 -66.8 C 53.1 -37.6, 25.0 -15.8, 0.0 0.0 C -25.0 15.8, -46.9 25.7, -65.6 31.2 C -84.4 36.6, -100.0 37.6, -112.5 35.6 C -125.0 33.6, -134.4 28.7, -140.6 22.3 C -146.9 15.8, -150.0 7.9, -150.0 0.0 C -150.0 -7.9, -146.9 -15.8, -140.6 -22.3 C -134.4 -28.7, -125.0 -33.6, -112.5 -35.6 C -100.0 -37.6, -84.4 -36.6, -65.6 -31.2 C -46.9 -25.7, -25.0 -15.8, 0.0 0.0 C 25.0 15.8, 53.1 37.6, 84.4 66.8 C 115.6 96.0, 150.0 132.6, 187.5 178.1 C 225.0 223.6, 265.6 278.1, 309.4 342.9" />
      </g>
      <circle cx="790" cy="140" r="3.5" fill="#a51c30" opacity="0.35" />

      <!-- cusp y² = x³, cusp point marked at the origin -->
      <g transform="translate(175 520) rotate(155)" opacity="0.09">
        <path
          fill="none"
          stroke="url(#end-cusp-stroke)"
          stroke-width="2.5"
          d="M 336.4 -259.1 C 299.0 -215.9, 264.8 -180.0, 233.6 -150.0 C 202.5 -120.0, 174.4 -96.0, 149.5 -76.8 C 124.6 -57.6, 102.8 -43.2, 84.1 -32.4 C 65.4 -21.6, 49.8 -14.4, 37.4 -9.6 C 24.9 -4.8, 15.6 -2.4, 9.3 -1.2 C 3.1 -0.0, 0.0 -0.0, 0.0 -0.0 C 0.0 0.0, 3.1 0.0, 9.3 1.2 C 15.6 2.4, 24.9 4.8, 37.4 9.6 C 49.8 14.4, 65.4 21.6, 84.1 32.4 C 102.8 43.2, 124.6 57.6, 149.5 76.8 C 174.4 96.0, 202.5 120.0, 233.6 150.0 C 264.8 180.0, 299.0 215.9, 336.4 259.1" />
      </g>
      <circle cx="175" cy="520" r="3.5" fill="#4a6fa5" opacity="0.3" />

      </g>
    </svg>
  </div>

  <h1>Thank you!</h1>

  <hr class="title-rule" />
</section>
`,le=Object.defineProperty,ue=Object.defineProperties,de=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||={})pe.call(t,n)&&he(e,n,t[n]);if(fe)for(var n of fe(t))me.call(t,n)&&he(e,n,t[n]);return e},ge=(e,t)=>ue(e,de(t)),_e=(e,t,n)=>he(e,typeof t==`symbol`?t:t+``,n),ve=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),ye=(e,t)=>{for(let n in t)e[n]=t[n];return e},R=(e,t)=>Array.from(e.querySelectorAll(t)),be=(e,t,n)=>{n?e.classList.add(t):e.classList.remove(t)},xe=e=>{if(typeof e==`string`){if(e===`null`)return null;if(e===`true`)return!0;if(e===`false`)return!1;if(e.match(/^-?[\d\.]+$/))return parseFloat(e)}return e},z=(e,t)=>{e.style.transform=t},B=(e,t)=>{let n=e.matches||e.matchesSelector||e.msMatchesSelector;return!!(n&&n.call(e,t))},V=(e,t)=>{if(e&&typeof e.closest==`function`)return e.closest(t);for(;e;){if(B(e,t))return e;e=e.parentElement}return null},Se=e=>{e||=document.documentElement;let t=e.requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e)},Ce=(e,t,n,r=``)=>{let i=e.querySelectorAll(`.`+n);for(let t=0;t<i.length;t++){let n=i[t];if(n.parentNode===e)return n}let a=document.createElement(t);return a.className=n,a.innerHTML=r,e.appendChild(a),a},we=e=>{let t=document.createElement(`style`);return e&&e.length>0&&t.appendChild(document.createTextNode(e)),document.head.appendChild(t),t},Te=()=>{let e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{let n=t.split(`=`).shift(),r=t.split(`=`).pop();return n&&r!==void 0&&(e[n]=r),t});for(let t in e){let n=e[t];e[t]=xe(unescape(n))}return e.dependencies!==void 0&&delete e.dependencies,e},Ee=(e,t=0)=>{if(e){let n,r=e.style.height;return e.style.height=`0px`,e.parentElement&&(e.parentElement.style.height=`auto`),n=t-(e.parentElement?.offsetHeight||0),e.style.height=r+`px`,e.parentElement&&e.parentElement.style.removeProperty(`height`),n}return t},De={mp4:`video/mp4`,m4a:`video/mp4`,ogv:`video/ogg`,mpeg:`video/mpeg`,webm:`video/webm`},Oe=(e=``)=>{let t=e.split(`.`).pop();return t?De[t]:void 0},H=(e=``)=>encodeURI(e).replace(/%5B/g,`[`).replace(/%5D/g,`]`).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),ke=navigator.userAgent,U=/(iphone|ipod|ipad|android)/gi.test(ke)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,Ae=/android/gi.test(ke),W=(function(e){if(e){var t=function(e){return[].slice.call(e)},n=0,r=1,i=2,a=3,o=[],s=null,c=`requestAnimationFrame`in e?function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{sync:!1};e.cancelAnimationFrame(s);var n=function(){return u(o.filter((function(e){return e.dirty&&e.active})))};if(t.sync)return n();s=e.requestAnimationFrame(n)}:function(){},l=function(e){return function(t){o.forEach((function(t){return t.dirty=e})),c(t)}},u=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=m(e)})),e.filter(h).forEach(g);var t=e.filter(p);t.forEach(f),t.forEach((function(e){g(e),d(e)})),t.forEach(_)},d=function(e){return e.dirty=n},f=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?`normal`:`nowrap`},p=function(e){return e.dirty!==i||e.dirty===i&&e.element.parentNode.clientWidth!==e.availableWidth},m=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue(`font-size`)),t.display=n.getPropertyValue(`display`),t.whiteSpace=n.getPropertyValue(`white-space`),!0},h=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display=`inline-block`),e.whiteSpace!==`nowrap`&&(t=!0,e.whiteSpace=`nowrap`),e.preStyleTestCompleted=!0,t)},g=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+`px`},_=function(e){e.element.dispatchEvent(new CustomEvent(`fit`,{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},v=function(e,t){return function(n){e.dirty=t,e.active&&c(n)}},ee=function(e){return function(){o=o.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},y=function(e){return function(){e.active||(e.active=!0,c())}},b=function(e){return function(){return e.active=!1}},x=function(e){e.observeMutations&&(e.observer=new MutationObserver(v(e,r)),e.observer.observe(e.element,e.observeMutations))},S={minSize:16,maxSize:512,multiLine:!0,observeMutations:`MutationObserver`in e&&{subtree:!0,childList:!0,characterData:!0}},C=null,w=function(){e.clearTimeout(C),C=e.setTimeout(l(i),D.observeWindowDelay)},T=[`resize`,`orientationchange`];return Object.defineProperty(D,`observeWindow`,{set:function(t){var n=`${t?`add`:`remove`}EventListener`;T.forEach((function(t){e[n](t,w)}))}}),D.observeWindow=!0,D.observeWindowDelay=100,D.fitAll=l(a),D}function E(e,t){var n=Object.assign({},S,t),r=e.map((function(e){var t=Object.assign({},n,{element:e,active:!0});return(function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},x(e),e.newbie=!0,e.dirty=!0,o.push(e)})(t),{element:e,fit:v(t,a),unfreeze:y(t),freeze:b(t),unsubscribe:ee(t)}}));return c(),r}function D(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof e==`string`?E(t(document.querySelectorAll(e)),n):E([e],n)[0]}})(typeof window>`u`?null:window),je=class{constructor(e){_e(this,`allowedToPlayAudio`,null),this.Reveal=e,this.startEmbeddedMedia=this.startEmbeddedMedia.bind(this),this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this),this.preventIframeAutoFocus=this.preventIframeAutoFocus.bind(this),this.ensureMobileMediaPlaying=this.ensureMobileMediaPlaying.bind(this),this.failedAudioPlaybackTargets=new Set,this.failedVideoPlaybackTargets=new Set,this.failedMutedVideoPlaybackTargets=new Set,this.renderMediaPlayButton()}renderMediaPlayButton(){this.mediaPlayButton=document.createElement(`button`),this.mediaPlayButton.className=`r-overlay-button r-media-play-button`,this.mediaPlayButton.addEventListener(`click`,()=>{this.resetTemporarilyMutedMedia(),new Set([...this.failedAudioPlaybackTargets,...this.failedVideoPlaybackTargets,...this.failedMutedVideoPlaybackTargets]).forEach(e=>{this.startEmbeddedMedia({target:e})}),this.clearMediaPlaybackErrors()})}shouldPreload(e){if(this.Reveal.isScrollView())return!0;let t=this.Reveal.getConfig().preloadIframes;return typeof t!=`boolean`&&(t=e.hasAttribute(`data-preload`)),t}load(e,t={}){let n=this.Reveal.getConfig().display;if(n.includes(`!important`)){let t=n.replace(/\s*!important\s*$/,``).trim();e.style.setProperty(`display`,t,`important`)}else e.style.display=n;R(e,`img[data-src], video[data-src], audio[data-src], iframe[data-src]`).forEach(e=>{let t=e.tagName===`IFRAME`;(!t||this.shouldPreload(e))&&(e.setAttribute(`src`,e.getAttribute(`data-src`)),e.setAttribute(`data-lazy-loaded`,``),e.removeAttribute(`data-src`),t&&e.addEventListener(`load`,this.preventIframeAutoFocus))}),R(e,`video, audio`).forEach(e=>{let t=0;R(e,`source[data-src]`).forEach(e=>{e.setAttribute(`src`,e.getAttribute(`data-src`)),e.removeAttribute(`data-src`),e.setAttribute(`data-lazy-loaded`,``),t+=1}),U&&e.tagName===`VIDEO`&&e.setAttribute(`playsinline`,``),t>0&&e.load()});let r=e.slideBackgroundElement;if(r){r.style.display=`block`;let n=e.slideBackgroundContentElement,i=e.getAttribute(`data-background-iframe`);if(r.hasAttribute(`data-loaded`)===!1){r.setAttribute(`data-loaded`,`true`);let a=e.getAttribute(`data-background-image`),o=e.getAttribute(`data-background-video`),s=e.hasAttribute(`data-background-video-loop`),c=e.hasAttribute(`data-background-video-muted`);if(a)/^data:/.test(a.trim())?n.style.backgroundImage=`url(${a.trim()})`:n.style.backgroundImage=a.split(`,`).map(e=>`url(${H(decodeURI(e.trim()))})`).join(`,`);else if(o){let e=document.createElement(`video`);s&&e.setAttribute(`loop`,``),(c||this.Reveal.isSpeakerNotes())&&(e.muted=!0),U&&e.setAttribute(`playsinline`,``),o.split(`,`).forEach(t=>{let n=document.createElement(`source`);n.setAttribute(`src`,t);let r=Oe(t);r&&n.setAttribute(`type`,r),e.appendChild(n)}),n.appendChild(e)}else if(i&&t.excludeIframes!==!0){let e=document.createElement(`iframe`);e.setAttribute(`allowfullscreen`,``),e.setAttribute(`mozallowfullscreen`,``),e.setAttribute(`webkitallowfullscreen`,``),e.setAttribute(`allow`,`autoplay`),e.setAttribute(`data-src`,i),e.style.width=`100%`,e.style.height=`100%`,e.style.maxHeight=`100%`,e.style.maxWidth=`100%`,n.appendChild(e)}}let a=n.querySelector(`iframe[data-src]`);a&&this.shouldPreload(r)&&!/autoplay=(1|true|yes)/gi.test(i)&&a.getAttribute(`src`)!==i&&a.setAttribute(`src`,i)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(`.r-fit-text`)).forEach(e=>{W(e,{minSize:24,maxSize:this.Reveal.getConfig().height*.8,observeMutations:!1,observeWindow:!1})})}unload(e){e.style.display=`none`;let t=this.Reveal.getSlideBackground(e);t&&(t.style.display=`none`,R(t,`iframe[src]`).forEach(e=>{e.removeAttribute(`src`)})),R(e,`video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]`).forEach(e=>{e.setAttribute(`data-src`,e.getAttribute(`src`)),e.removeAttribute(`src`)}),R(e,`video[data-lazy-loaded] source[src], audio source[src]`).forEach(e=>{e.setAttribute(`data-src`,e.getAttribute(`src`)),e.removeAttribute(`src`)})}formatEmbeddedContent(){let e=(e,t,n)=>{R(this.Reveal.getSlidesElement(),`iframe[`+e+`*="`+t+`"]`).forEach(t=>{let r=t.getAttribute(e);r&&r.indexOf(n)===-1&&t.setAttribute(e,r+(/\?/.test(r)?`&`:`?`)+n)})};e(`src`,`youtube.com/embed/`,`enablejsapi=1`),e(`data-src`,`youtube.com/embed/`,`enablejsapi=1`),e(`src`,`player.vimeo.com/`,`api=1`),e(`data-src`,`player.vimeo.com/`,`api=1`)}startEmbeddedContent(e){if(e){let t=this.Reveal.isSpeakerNotes();R(e,`img[src$=".gif"]`).forEach(e=>{e.setAttribute(`src`,e.getAttribute(`src`))}),R(e,`video, audio`).forEach(e=>{if(V(e,`.fragment`)&&!V(e,`.fragment.visible`))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!=`boolean`&&(n=e.hasAttribute(`data-autoplay`)||!!V(e,`.slide-background`)),n&&typeof e.play==`function`){if(t&&!e.muted)return;e.readyState>1?this.startEmbeddedMedia({target:e}):U?(e.addEventListener(`canplay`,this.ensureMobileMediaPlaying),this.playMediaElement(e)):(e.removeEventListener(`loadeddata`,this.startEmbeddedMedia),e.addEventListener(`loadeddata`,this.startEmbeddedMedia))}}),t||(R(e,`iframe[src]`).forEach(e=>{V(e,`.fragment`)&&!V(e,`.fragment.visible`)||this.startEmbeddedIframe({target:e})}),R(e,`iframe[data-src]`).forEach(e=>{V(e,`.fragment`)&&!V(e,`.fragment.visible`)||e.getAttribute(`src`)!==e.getAttribute(`data-src`)&&(e.removeEventListener(`load`,this.startEmbeddedIframe),e.addEventListener(`load`,this.startEmbeddedIframe),e.setAttribute(`src`,e.getAttribute(`data-src`)))}))}}ensureMobileMediaPlaying(e){let t=e.target;typeof t.getVideoPlaybackQuality==`function`&&setTimeout(()=>{let e=t.paused===!1,n=t.getVideoPlaybackQuality().totalVideoFrames;e&&n===0&&(t.load(),t.play())},1e3)}startEmbeddedMedia(e){let t=!!V(e.target,`html`),n=!!V(e.target,`.present`);t&&n&&(e.target.paused||e.target.ended)&&(e.target.currentTime=0,this.playMediaElement(e.target)),e.target.removeEventListener(`loadeddata`,this.startEmbeddedMedia)}playMediaElement(e){let t=e.play();t&&typeof t.catch==`function`&&t.then(()=>{e.muted||(this.allowedToPlayAudio=!0)}).catch(t=>{if(t.name===`NotAllowedError`)if(this.allowedToPlayAudio=!1,e.tagName===`VIDEO`){this.onVideoPlaybackNotAllowed(e);let t=!!V(e,`html`),n=!!V(e,`.present`),r=e.muted;t&&n&&!r&&(e.setAttribute(`data-muted-by-reveal`,`true`),e.muted=!0,e.play().catch(()=>{this.onMutedVideoPlaybackNotAllowed(e)}))}else e.tagName===`AUDIO`&&this.onAudioPlaybackNotAllowed(e)})}startEmbeddedIframe(e){let t=e.target;if(this.preventIframeAutoFocus(e),t&&t.contentWindow){let n=!!V(e.target,`html`),r=!!V(e.target,`.present`);if(n&&r){let e=this.Reveal.getConfig().autoPlayMedia;typeof e!=`boolean`&&(e=t.hasAttribute(`data-autoplay`)||!!V(t,`.slide-background`)),/youtube\.com\/embed\//.test(t.getAttribute(`src`))&&e?t.contentWindow.postMessage(`{"event":"command","func":"playVideo","args":""}`,`*`):/player\.vimeo\.com\//.test(t.getAttribute(`src`))&&e?t.contentWindow.postMessage(`{"method":"play"}`,`*`):t.contentWindow.postMessage(`slide:start`,`*`)}}}stopEmbeddedContent(e,t={}){t=ye({unloadIframes:!0},t),e&&e.parentNode&&(R(e,`video, audio`).forEach(e=>{!e.hasAttribute(`data-ignore`)&&typeof e.pause==`function`&&(e.setAttribute(`data-paused-by-reveal`,``),e.pause(),U&&e.removeEventListener(`canplay`,this.ensureMobileMediaPlaying))}),R(e,`iframe`).forEach(e=>{e.contentWindow&&e.contentWindow.postMessage(`slide:stop`,`*`),e.removeEventListener(`load`,this.preventIframeAutoFocus),e.removeEventListener(`load`,this.startEmbeddedIframe)}),R(e,`iframe[src*="youtube.com/embed/"]`).forEach(e=>{!e.hasAttribute(`data-ignore`)&&e.contentWindow&&typeof e.contentWindow.postMessage==`function`&&e.contentWindow.postMessage(`{"event":"command","func":"pauseVideo","args":""}`,`*`)}),R(e,`iframe[src*="player.vimeo.com/"]`).forEach(e=>{!e.hasAttribute(`data-ignore`)&&e.contentWindow&&typeof e.contentWindow.postMessage==`function`&&e.contentWindow.postMessage(`{"method":"pause"}`,`*`)}),t.unloadIframes===!0&&R(e,`iframe[data-src]`).forEach(e=>{e.setAttribute(`src`,`about:blank`),e.removeAttribute(`src`)}))}isAllowedToPlayAudio(){return this.allowedToPlayAudio}showPlayOrUnmuteButton(){let e=this.failedAudioPlaybackTargets.size,t=this.failedVideoPlaybackTargets.size,n=this.failedMutedVideoPlaybackTargets.size,r=`Play media`;n>0?r=`Play video`:t>0?r=`Unmute video`:e>0&&(r=`Play audio`),this.mediaPlayButton.textContent=r,this.Reveal.getRevealElement().appendChild(this.mediaPlayButton)}onAudioPlaybackNotAllowed(e){this.failedAudioPlaybackTargets.add(e),this.showPlayOrUnmuteButton(e)}onVideoPlaybackNotAllowed(e){this.failedVideoPlaybackTargets.add(e),this.showPlayOrUnmuteButton()}onMutedVideoPlaybackNotAllowed(e){this.failedMutedVideoPlaybackTargets.add(e),this.showPlayOrUnmuteButton()}resetTemporarilyMutedMedia(){new Set([...this.failedAudioPlaybackTargets,...this.failedVideoPlaybackTargets,...this.failedMutedVideoPlaybackTargets]).forEach(e=>{e.hasAttribute(`data-muted-by-reveal`)&&(e.muted=!1,e.removeAttribute(`data-muted-by-reveal`))})}clearMediaPlaybackErrors(){this.resetTemporarilyMutedMedia(),this.failedAudioPlaybackTargets.clear(),this.failedVideoPlaybackTargets.clear(),this.failedMutedVideoPlaybackTargets.clear(),this.mediaPlayButton.remove()}preventIframeAutoFocus(e){let t=e.target;if(t&&this.Reveal.getConfig().preventIframeAutoFocus){let e=0,n=()=>{document.activeElement===t?document.activeElement.blur():e<1e3&&(e+=100,setTimeout(n,100))};setTimeout(n,100)}}afterSlideChanged(){this.clearMediaPlaybackErrors()}},G=`.slides section`,K=`.slides>section`,Me=`.slides>section.present>section`,Ne=`.backgrounds>.slide-background`,Pe=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,Fe=`h.v`,Ie=`h/v`,Le=`c`,Re=`c/t`,ze=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement(`div`),this.element.className=`slide-number`,this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let n=`none`;e.slideNumber&&!this.Reveal.isPrintView()&&(e.showSlideNumber===`all`||e.showSlideNumber===`speaker`&&this.Reveal.isSpeakerNotes())&&(n=`block`),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t=this.Reveal.getConfig(),n,r=Fe;if(typeof t.slideNumber==`function`)n=t.slideNumber(e);else{typeof t.slideNumber==`string`&&(r=t.slideNumber),!/c/.test(r)&&this.Reveal.getHorizontalSlides().length===1&&(r=Le);let i=e&&e.dataset.visibility===`uncounted`?0:1;switch(n=[],r){case Le:n.push(this.Reveal.getSlidePastCount(e)+i);break;case Re:n.push(this.Reveal.getSlidePastCount(e)+i,`/`,this.Reveal.getTotalSlides());break;default:let t=this.Reveal.getIndices(e);n.push(t.h+i);let a=r===Ie?`/`:`.`;this.Reveal.isVerticalSlide(e)&&n.push(a,t.v+1)}}let i=`#`+this.Reveal.location.getHash(e);return this.formatNumber(n[0],n[1],n[2],i)}formatNumber(e,t,n,r=`#`+this.Reveal.location.getHash()){return typeof n==`number`&&!isNaN(n)?`<a href="${r}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${n}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${e}</span>
					</a>`}destroy(){this.element.remove()}},Be=class{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement(`div`),this.element.className=`jump-to-slide`,this.jumpInput=document.createElement(`input`),this.jumpInput.type=`text`,this.jumpInput.className=`jump-to-slide-input`,this.jumpInput.placeholder=`Jump to slide`,this.jumpInput.addEventListener(`input`,this.onInput),this.jumpInput.addEventListener(`keydown`,this.onKeyDown),this.jumpInput.addEventListener(`blur`,this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value=``,clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let e=this.jumpInput.value.trim(``),t;if(/^\d+$/.test(e)){let n=this.Reveal.getConfig().slideNumber;if(n===Le||n===Re){let n=this.Reveal.getSlides()[parseInt(e,10)-1];n&&(t=this.Reveal.getIndices(n))}}return t||=(/^\d+\.\d+$/.test(e)&&(e=e.replace(`.`,`/`)),this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==``?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),e)}search(e){let t=RegExp(`\\b`+e.trim()+`\\b`,`i`),n=this.Reveal.getSlides().find(e=>t.test(e.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener(`input`,this.onInput),this.jumpInput.removeEventListener(`keydown`,this.onKeyDown),this.jumpInput.removeEventListener(`blur`,this.onBlur),this.element.remove()}onKeyDown(e){e.keyCode===13?this.confirm():e.keyCode===27&&(this.cancel(),e.stopImmediatePropagation())}onInput(e){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}},q=e=>{let t=e.match(/^#([0-9a-f]{3})$/i);if(t&&t[1]){let e=t[1];return{r:parseInt(e.charAt(0),16)*17,g:parseInt(e.charAt(1),16)*17,b:parseInt(e.charAt(2),16)*17}}let n=e.match(/^#([0-9a-f]{6})$/i);if(n&&n[1]){let e=n[1];return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}let r=e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(r)return{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10)};let i=e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null},Ve=e=>(typeof e==`string`&&(e=q(e)),e?(e.r*299+e.g*587+e.b*114)/1e3:null),He=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement(`div`),this.element.className=`backgrounds`,this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML=``,this.element.classList.add(`no-transition`),this.Reveal.getHorizontalSlides().forEach(e=>{let t=this.createBackground(e,this.element);R(e,`section`).forEach(e=>{this.createBackground(e,t),t.classList.add(`stack`)})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage=`url("`+this.Reveal.getConfig().parallaxBackgroundImage+`")`,this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add(`has-parallax-background`)},1)):(this.element.style.backgroundImage=``,this.Reveal.getRevealElement().classList.remove(`has-parallax-background`))}createBackground(e,t){let n=document.createElement(`div`);n.className=`slide-background `+e.className.replace(/present|past|future/,``);let r=document.createElement(`div`);return r.className=`slide-background-content`,n.appendChild(r),t.appendChild(n),e.slideBackgroundElement=n,e.slideBackgroundContentElement=r,this.sync(e),n}sync(e){let t=e.slideBackgroundElement,n=e.slideBackgroundContentElement,r={background:e.getAttribute(`data-background`),backgroundSize:e.getAttribute(`data-background-size`),backgroundImage:e.getAttribute(`data-background-image`),backgroundVideo:e.getAttribute(`data-background-video`),backgroundIframe:e.getAttribute(`data-background-iframe`),backgroundColor:e.getAttribute(`data-background-color`),backgroundGradient:e.getAttribute(`data-background-gradient`),backgroundRepeat:e.getAttribute(`data-background-repeat`),backgroundPosition:e.getAttribute(`data-background-position`),backgroundTransition:e.getAttribute(`data-background-transition`),backgroundOpacity:e.getAttribute(`data-background-opacity`)},i=e.hasAttribute(`data-preload`);e.classList.remove(`has-dark-background`),e.classList.remove(`has-light-background`),t.removeAttribute(`data-loaded`),t.removeAttribute(`data-background-hash`),t.removeAttribute(`data-background-size`),t.removeAttribute(`data-background-transition`),t.style.backgroundColor=``,n.style.backgroundSize=``,n.style.backgroundRepeat=``,n.style.backgroundPosition=``,n.style.backgroundImage=``,n.style.opacity=``,n.innerHTML=``,r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?e.setAttribute(`data-background-image`,r.background):t.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&t.setAttribute(`data-background-hash`,r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&t.setAttribute(`data-background-size`,r.backgroundSize),r.backgroundColor&&(t.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(t.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&t.setAttribute(`data-background-transition`,r.backgroundTransition),i&&t.setAttribute(`data-preload`,``),r.backgroundSize&&(n.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(n.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(n.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(n.style.opacity=r.backgroundOpacity);let a=this.getContrastClass(e);typeof a==`string`&&e.classList.add(a)}getContrastClass(e){let t=e.slideBackgroundElement,n=e.getAttribute(`data-background-color`);if(!n||!q(n)){let e=window.getComputedStyle(t);e&&e.backgroundColor&&(n=e.backgroundColor)}if(n){let e=q(n);if(e&&e.a!==0)return Ve(n)<128?`has-dark-background`:`has-light-background`}return null}bubbleSlideContrastClassToElement(e,t){[`has-light-background`,`has-dark-background`].forEach(n=>{e.classList.contains(n)?t.classList.add(n):t.classList.remove(n)},this)}update(e=!1){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),r=this.Reveal.getIndices(),i=null,a=t.rtl?`future`:`past`,o=t.rtl?`past`:`future`;if(Array.from(this.element.childNodes).forEach((t,n)=>{t.classList.remove(`past`,`present`,`future`),n<r.h?t.classList.add(a):n>r.h?t.classList.add(o):(t.classList.add(`present`),i=t),(e||n===r.h)&&R(t,`.slide-background`).forEach((e,t)=>{e.classList.remove(`past`,`present`,`future`);let a=typeof r.v==`number`?r.v:0;t<a?e.classList.add(`past`):t>a?e.classList.add(`future`):(e.classList.add(`present`),n===r.h&&(i=e))})}),this.previousBackground&&!this.previousBackground.closest(`body`)&&(this.previousBackground=null),i&&this.previousBackground){let e=this.previousBackground.getAttribute(`data-background-hash`),t=i.getAttribute(`data-background-hash`);if(t&&t===e&&i!==this.previousBackground){this.element.classList.add(`no-transition`);let e=i.querySelector(`video`),t=this.previousBackground.querySelector(`video`);if(e&&t){let n=e.parentNode;t.parentNode.appendChild(e),n.appendChild(t)}}}let s=i!==this.previousBackground;if(s&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),s&&i){this.Reveal.slideContent.startEmbeddedContent(i);let e=i.querySelector(`.slide-background-content`);if(e){let t=e.style.backgroundImage||``;/\.gif/i.test(t)&&(e.style.backgroundImage=``,window.getComputedStyle(e).opacity,e.style.backgroundImage=t)}this.previousBackground=i}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout(()=>{this.element.classList.remove(`no-transition`)},10)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t=this.Reveal.getHorizontalSlides(),n=this.Reveal.getVerticalSlides(),r=this.element.style.backgroundSize.split(` `),i,a;r.length===1?i=a=parseInt(r[0],10):(i=parseInt(r[0],10),a=parseInt(r[1],10));let o=this.element.offsetWidth,s=t.length,c,l;c=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal==`number`?this.Reveal.getConfig().parallaxBackgroundHorizontal:s>1?(i-o)/(s-1):0,l=c*e.h*-1;let u=this.element.offsetHeight,d=n.length,f,p;f=typeof this.Reveal.getConfig().parallaxBackgroundVertical==`number`?this.Reveal.getConfig().parallaxBackgroundVertical:(a-u)/(d-1),p=d>0?f*e.v:0,this.element.style.backgroundPosition=l+`px `+-p+`px`}}destroy(){this.element.remove()}},Ue=0,We=class{constructor(e){this.Reveal=e}run(e,t){this.reset();let n=this.Reveal.getSlides(),r=n.indexOf(t),i=n.indexOf(e);if(e&&t&&e.hasAttribute(`data-auto-animate`)&&t.hasAttribute(`data-auto-animate`)&&e.getAttribute(`data-auto-animate-id`)===t.getAttribute(`data-auto-animate-id`)&&!(r>i?t:e).hasAttribute(`data-auto-animate-restart`)){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||we();let n=this.getAutoAnimateOptions(t);e.dataset.autoAnimate=`pending`,t.dataset.autoAnimate=`pending`,n.slideDirection=r>i?`forward`:`backward`;let a=e.style.display===`none`;a&&(e.style.display=this.Reveal.getConfig().display);let o=this.getAutoAnimatableElements(e,t).map(e=>this.autoAnimateElements(e.from,e.to,e.options||{},n,Ue++));if(a&&(e.style.display=`none`),t.dataset.autoAnimateUnmatched!==`false`&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let e=n.duration*.8,r=n.duration*.2;this.getUnmatchedAutoAnimateElements(t).forEach(e=>{let t=this.getAutoAnimateOptions(e,n),r=`unmatched`;(t.duration!==n.duration||t.delay!==n.delay)&&(r=`unmatched-`+ Ue++,o.push(`[data-auto-animate="running"] [data-auto-animate-target="${r}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)),e.dataset.autoAnimateTarget=r},this),o.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${r}s; }`)}this.autoAnimateStyleSheet.innerHTML=o.join(``),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate=`running`)}),this.Reveal.dispatchEvent({type:`autoanimate`,data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){R(this.Reveal.getRevealElement(),`[data-auto-animate]:not([data-auto-animate=""])`).forEach(e=>{e.dataset.autoAnimate=``}),R(this.Reveal.getRevealElement(),`[data-auto-animate-target]`).forEach(e=>{delete e.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,n,r,i){e.dataset.autoAnimateTarget=``,t.dataset.autoAnimateTarget=i;let a=this.getAutoAnimateOptions(t,r);n.delay!==void 0&&(a.delay=n.delay),n.duration!==void 0&&(a.duration=n.duration),n.easing!==void 0&&(a.easing=n.easing);let o=this.getAutoAnimatableProperties(`from`,e,n),s=this.getAutoAnimatableProperties(`to`,t,n);if(t.classList.contains(`fragment`)&&delete s.styles.opacity,n.translate!==!1||n.scale!==!1){let e=this.Reveal.getScale(),t={x:(o.x-s.x)/e,y:(o.y-s.y)/e,scaleX:o.width/s.width,scaleY:o.height/s.height};t.x=Math.round(t.x*1e3)/1e3,t.y=Math.round(t.y*1e3)/1e3,t.scaleX=Math.round(t.scaleX*1e3)/1e3,t.scaleX=Math.round(t.scaleX*1e3)/1e3;let r=n.translate!==!1&&(t.x!==0||t.y!==0),i=n.scale!==!1&&(t.scaleX!==0||t.scaleY!==0);if(r||i){let e=[];r&&e.push(`translate(${t.x}px, ${t.y}px)`),i&&e.push(`scale(${t.scaleX}, ${t.scaleY})`),o.styles.transform=e.join(` `),o.styles[`transform-origin`]=`top left`,s.styles.transform=`none`}}for(let e in s.styles){let t=s.styles[e],n=o.styles[e];t===n?delete s.styles[e]:(t.explicitValue===!0&&(s.styles[e]=t.value),n.explicitValue===!0&&(o.styles[e]=n.value))}let c=``,l=Object.keys(s.styles);if(l.length>0){o.styles.transition=`none`,s.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,s.styles[`transition-property`]=l.join(`, `),s.styles[`will-change`]=l.join(`, `);let e=Object.keys(o.styles).map(e=>e+`: `+o.styles[e]+` !important;`).join(``),t=Object.keys(s.styles).map(e=>e+`: `+s.styles[e]+` !important;`).join(``);c=`[data-auto-animate-target="`+i+`"] {`+e+`}[data-auto-animate="running"] [data-auto-animate-target="`+i+`"] {`+t+`}`}return c}getAutoAnimateOptions(e,t){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=ye(n,t),e.parentNode){let t=V(e.parentNode,`[data-auto-animate-target]`);t&&(n=this.getAutoAnimateOptions(t,n))}return e.dataset.autoAnimateEasing&&(n.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(n.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(n.delay=parseFloat(e.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(e,t,n){let r=this.Reveal.getConfig(),i={styles:[]};if(n.translate!==!1||n.scale!==!1){let e;if(typeof n.measure==`function`)e=n.measure(t);else if(r.center)e=t.getBoundingClientRect();else{let n=this.Reveal.getScale();e={x:t.offsetLeft*n,y:t.offsetTop*n,width:t.offsetWidth*n,height:t.offsetHeight*n}}i.x=e.x,i.y=e.y,i.width=e.width,i.height=e.height}let a=getComputedStyle(t);return(n.styles||r.autoAnimateStyles).forEach(t=>{let n;typeof t==`string`&&(t={property:t}),t.from!==void 0&&e===`from`?n={value:t.from,explicitValue:!0}:t.to!==void 0&&e===`to`?n={value:t.to,explicitValue:!0}:(t.property===`line-height`&&(n=parseFloat(a[`line-height`])/parseFloat(a[`font-size`])),isNaN(n)&&(n=a[t.property])),n!==``&&(i.styles[t.property]=n)}),i}getAutoAnimatableElements(e,t){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher==`function`?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),r=[];return n.filter((e,t)=>{if(r.indexOf(e.to)===-1)return r.push(e.to),!0})}getAutoAnimatePairs(e,t){let n=[],r=`h1, h2, h3, h4, h5, h6, p, li`;return this.findAutoAnimateMatches(n,e,t,`[data-id]`,e=>e.nodeName+`:::`+e.getAttribute(`data-id`)),this.findAutoAnimateMatches(n,e,t,r,e=>e.nodeName+`:::`+e.textContent.trim()),this.findAutoAnimateMatches(n,e,t,`img, video, iframe`,e=>e.nodeName+`:::`+(e.getAttribute(`src`)||e.getAttribute(`data-src`))),this.findAutoAnimateMatches(n,e,t,`pre`,e=>e.nodeName+`:::`+e.textContent.trim()),n.forEach(e=>{B(e.from,r)?e.options={scale:!1}:B(e.from,`pre`)&&(e.options={scale:!1,styles:[`width`,`height`]},this.findAutoAnimateMatches(n,e.from,e.to,`.hljs .hljs-ln-code`,e=>e.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,e.from,e.to,`.hljs .hljs-ln-numbers[data-line-number]`,e=>e.getAttribute(`data-line-number`),{scale:!1,styles:[`width`],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(e){let t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,n,r,i,a){let o={},s={};[].slice.call(t.querySelectorAll(r)).forEach((e,t)=>{let n=i(e);typeof n==`string`&&n.length&&(o[n]=o[n]||[],o[n].push(e))}),[].slice.call(n.querySelectorAll(r)).forEach((t,n)=>{let r=i(t);s[r]=s[r]||[],s[r].push(t);let c;if(o[r]){let e=s[r].length-1,t=o[r].length-1;o[r][e]?(c=o[r][e],o[r][e]=null):o[r][t]&&(c=o[r][t],o[r][t]=null)}c&&e.push({from:c,to:t,options:a})})}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce((e,t)=>{let n=t.querySelector(`[data-auto-animate-target]`);return!t.hasAttribute(`data-auto-animate-target`)&&!n&&e.push(t),t.querySelector(`[data-auto-animate-target]`)&&(e=e.concat(this.getUnmatchedAutoAnimateElements(t))),e},[])}},Ge=500,Ke=4,qe=6,Je=8,Ye=class{constructor(e){this.Reveal=e,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;let e=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;let t=R(this.Reveal.getRevealElement(),K),n=R(this.Reveal.getRevealElement(),Ne);this.viewportElement.classList.add(`loading-scroll-mode`,`reveal-scroll`);let r,i=window.getComputedStyle(this.viewportElement);i&&i.background&&(r=i.background);let a=[],o=t[0].parentNode,s,c=(e,t,i,o)=>{let c;if(s&&this.Reveal.shouldAutoAnimateBetween(s,e))c=document.createElement(`div`),c.className=`scroll-page-content scroll-auto-animate-page`,c.style.display=`none`,s.closest(`.scroll-page-content`).parentNode.appendChild(c);else{let e=document.createElement(`div`);if(e.className=`scroll-page`,a.push(e),o&&n.length>t){let i=n[t],a=window.getComputedStyle(i);a&&a.background?e.style.background=a.background:r&&(e.style.background=r)}else r&&(e.style.background=r);let i=document.createElement(`div`);i.className=`scroll-page-sticky`,e.appendChild(i),c=document.createElement(`div`),c.className=`scroll-page-content`,i.appendChild(c)}c.appendChild(e),e.classList.remove(`past`,`future`),e.setAttribute(`data-index-h`,t),e.setAttribute(`data-index-v`,i),e.slideBackgroundElement&&(e.slideBackgroundElement.remove(`past`,`future`),c.insertBefore(e.slideBackgroundElement,e)),s=e};t.forEach((e,t)=>{this.Reveal.isVerticalStack(e)?e.querySelectorAll(`section`).forEach((e,n)=>{c(e,t,n,!0)}):c(e,t,0)},this),this.createProgressBar(),R(this.Reveal.getRevealElement(),`.stack`).forEach(e=>e.remove()),a.forEach(e=>o.appendChild(e)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(e),this.activatedCallbacks.forEach(e=>e()),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove(`loading-scroll-mode`),this.viewportElement.addEventListener(`scroll`,this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;let e=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener(`scroll`,this.onScroll),this.viewportElement.classList.remove(`reveal-scroll`),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(e),this.slideHTMLBeforeActivation=null}toggle(e){typeof e==`boolean`?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement(`div`),this.progressBar.className=`scrollbar`,this.progressBarInner=document.createElement(`div`),this.progressBarInner.className=`scrollbar-inner`,this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement(`div`),this.progressBarPlayhead.className=`scrollbar-playhead`,this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);let e=e=>{let t=(e.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;t=Math.max(Math.min(t,1),0),this.viewportElement.scrollTop=t*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},t=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)};this.progressBarInner.addEventListener(`mousedown`,n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),e(n)})}removeProgressBar(){this.progressBar&&=(this.progressBar.remove(),null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){let e=this.Reveal.getConfig(),t=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),r=e.scrollLayout===`compact`,i=this.viewportElement.offsetHeight,a=t.height*n,o=r?a:i;this.scrollTriggerHeight=r?a:i,this.viewportElement.style.setProperty(`--page-height`,o+`px`),this.viewportElement.style.scrollSnapType=typeof e.scrollSnap==`string`?`y ${e.scrollSnap}`:``,this.slideTriggers=[],this.pages=Array.from(this.Reveal.getRevealElement().querySelectorAll(`.scroll-page`)).map(n=>{let a=this.createPage({pageElement:n,slideElement:n.querySelector(`section`),stickyElement:n.querySelector(`.scroll-page-sticky`),contentElement:n.querySelector(`.scroll-page-content`),backgroundElement:n.querySelector(`.slide-background`),autoAnimateElements:n.querySelectorAll(`.scroll-auto-animate-page`),autoAnimatePages:[]});a.pageElement.style.setProperty(`--slide-height`,e.center===!0?`auto`:t.height+`px`),this.slideTriggers.push({page:a,activate:()=>this.activatePage(a),deactivate:()=>this.deactivatePage(a)}),this.createFragmentTriggersForPage(a),a.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(a);let s=Math.max(a.scrollTriggers.length-1,0);s+=a.autoAnimatePages.reduce((e,t)=>e+Math.max(t.scrollTriggers.length-1,0),a.autoAnimatePages.length),a.pageElement.querySelectorAll(`.scroll-snap-point`).forEach(e=>e.remove());for(let e=0;e<s+1;e++){let t=document.createElement(`div`);t.className=`scroll-snap-point`,t.style.height=this.scrollTriggerHeight+`px`,t.style.scrollSnapAlign=r?`center`:`start`,a.pageElement.appendChild(t),e===0&&(t.style.marginTop=-this.scrollTriggerHeight+`px`)}return r&&a.scrollTriggers.length>0?(a.pageHeight=i,a.pageElement.style.setProperty(`--page-height`,i+`px`)):(a.pageHeight=o,a.pageElement.style.removeProperty(`--page-height`)),a.scrollPadding=this.scrollTriggerHeight*s,a.totalHeight=a.pageHeight+a.scrollPadding,a.pageElement.style.setProperty(`--page-scroll-padding`,a.scrollPadding+`px`),s>0?(a.stickyElement.style.position=`sticky`,a.stickyElement.style.top=Math.max((i-a.pageHeight)/2,0)+`px`):(a.stickyElement.style.position=`relative`,a.pageElement.style.scrollSnapAlign=a.pageHeight<i?`center`:`start`),a}),this.setTriggerRanges(),this.viewportElement.setAttribute(`data-scrollbar`,e.scrollProgress),e.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce((e,t)=>e+Math.max(t.page.scrollTriggers.length,1),0);let e=0;this.slideTriggers.forEach((t,n)=>{t.range=[e,e+Math.max(t.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];let r=(t.range[1]-t.range[0])/t.page.scrollTriggers.length;t.page.scrollTriggers.forEach((t,n)=>{t.range=[e+n*r,e+(n+1)*r]}),e=t.range[1]}),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(e,t){t||=e.slideElement;let n=this.Reveal.fragments.sort(t.querySelectorAll(`.fragment`),!0);return n.length&&(e.fragments=this.Reveal.fragments.sort(t.querySelectorAll(`.fragment:not(.disabled)`)),e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,e.fragments,t)}}),n.forEach((n,r)=>{e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(r,e.fragments,t)}})})),e.scrollTriggers.length}createAutoAnimateTriggersForPage(e){e.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(e.autoAnimateElements).map((t,n)=>{let r=this.createPage({slideElement:t.querySelector(`section`),contentElement:t,backgroundElement:t.querySelector(`.slide-background`)});return this.createFragmentTriggersForPage(r,r.slideElement),e.autoAnimatePages.push(r),{page:r,activate:()=>this.activatePage(r),deactivate:()=>this.deactivatePage(r)}}))}createPage(e){return e.scrollTriggers=[],e.indexh=parseInt(e.slideElement.getAttribute(`data-index-h`),10),e.indexv=parseInt(e.slideElement.getAttribute(`data-index-v`),10),e}syncProgressBar(){this.progressBarInner.querySelectorAll(`.scrollbar-slide`).forEach(e=>e.remove());let e=this.viewportElement.scrollHeight,t=this.viewportElement.offsetHeight,n=t/e;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,Je),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;let r=t/e*this.progressBarHeight,i=Math.min(r/8,Ke);this.progressBarPlayhead.style.height=this.playheadHeight-i+`px`,r>qe?this.slideTriggers.forEach(e=>{let{page:t}=e;t.progressBarSlide=document.createElement(`div`),t.progressBarSlide.className=`scrollbar-slide`,t.progressBarSlide.style.top=e.range[0]*this.progressBarHeight+`px`,t.progressBarSlide.style.height=(e.range[1]-e.range[0])*this.progressBarHeight-i+`px`,t.progressBarSlide.classList.toggle(`has-triggers`,t.scrollTriggers.length>0),this.progressBarInner.appendChild(t.progressBarSlide),t.scrollTriggerElements=t.scrollTriggers.map((n,r)=>{let a=document.createElement(`div`);return a.className=`scrollbar-trigger`,a.style.top=(n.range[0]-e.range[0])*this.progressBarHeight+`px`,a.style.height=(n.range[1]-n.range[0])*this.progressBarHeight-i+`px`,t.progressBarSlide.appendChild(a),r===0&&(a.style.display=`none`),a})}):this.pages.forEach(e=>e.progressBarSlide=null)}syncScrollPosition(){let e=this.viewportElement.offsetHeight,t=e/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,r=this.viewportElement.scrollHeight-e,i=Math.max(Math.min(n/r,1),0),a=Math.max(Math.min((n+e/2)/this.viewportElement.scrollHeight,1),0),o;this.slideTriggers.forEach(e=>{let{page:n}=e;i>=e.range[0]-t*2&&i<=e.range[1]+t*2&&!n.loaded?(n.loaded=!0,this.Reveal.slideContent.load(n.slideElement)):n.loaded&&(n.loaded=!1,this.Reveal.slideContent.unload(n.slideElement)),i>=e.range[0]&&i<=e.range[1]?(this.activateTrigger(e),o=e.page):e.active&&this.deactivateTrigger(e)}),o&&o.scrollTriggers.forEach(e=>{a>=e.range[0]&&a<=e.range[1]?this.activateTrigger(e):e.active&&this.deactivateTrigger(e)}),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-e))}setProgressBarValue(e){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${e*this.progressBarScrollableHeight}px)`,this.getAllPages().filter(e=>e.progressBarSlide).forEach(e=>{e.progressBarSlide.classList.toggle(`active`,e.active===!0),e.scrollTriggers.forEach((t,n)=>{e.scrollTriggerElements[n].classList.toggle(`active`,e.active===!0&&t.active===!0)})}),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add(`visible`),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress===`auto`&&!this.draggingProgressBar&&(this.hideProgressBarTimeout=setTimeout(()=>{this.progressBar&&this.progressBar.classList.remove(`visible`)},Ge))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(e){if(!this.active)this.activatedCallbacks.push(()=>this.scrollToSlide(e));else{let t=this.getScrollTriggerBySlide(e);t&&(this.viewportElement.scrollTop=t.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout(()=>{sessionStorage.setItem(`reveal-scroll-top`,this.viewportElement.scrollTop),sessionStorage.setItem(`reveal-scroll-origin`,location.origin+location.pathname),this.storeScrollPositionTimeout=null},50)}restoreScrollPosition(){let e=sessionStorage.getItem(`reveal-scroll-top`),t=sessionStorage.getItem(`reveal-scroll-origin`);e&&t===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(e,10))}activatePage(e){if(!e.active){e.active=!0;let{slideElement:t,backgroundElement:n,contentElement:r,indexh:i,indexv:a}=e;r.style.display=`block`,t.classList.add(`present`),n&&n.classList.add(`present`),this.Reveal.setCurrentScrollPage(t,i,a),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t,this.viewportElement),Array.from(r.parentNode.querySelectorAll(`.scroll-page-content`)).forEach(e=>{e!==r&&(e.style.display=`none`)})}}deactivatePage(e){e.active&&(e.active=!1,e.slideElement&&e.slideElement.classList.remove(`present`),e.backgroundElement&&e.backgroundElement.classList.remove(`present`))}activateTrigger(e){e.active||(e.active=!0,e.activate())}deactivateTrigger(e){e.active&&(e.active=!1,e.deactivate&&e.deactivate())}getSlideByIndices(e,t){let n=this.getAllPages().find(n=>n.indexh===e&&n.indexv===t);return n?n.slideElement:null}getScrollTriggerBySlide(e){return this.slideTriggers.find(t=>t.page.slideElement===e)}getAllPages(){return this.pages.flatMap(e=>[e,...e.autoAnimatePages||[]])}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Xe=class{constructor(e){this.Reveal=e}activate(){return ve(this,null,function*(){let e=this.Reveal.getConfig(),t=R(this.Reveal.getRevealElement(),G),n=e.slideNumber&&/all|print/i.test(e.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),i=Math.floor(r.width*(1+e.margin)),a=Math.floor(r.height*(1+e.margin)),o=r.width,s=r.height;yield new Promise(requestAnimationFrame),we(`@page{size:`+i+`px `+a+`px; margin: 0px;}`),we(`.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: `+o+`px; max-height:`+s+`px}`),document.documentElement.classList.add(`reveal-print`,`print-pdf`),document.body.style.width=i+`px`,document.body.style.height=a+`px`;let c=this.Reveal.getViewportElement(),l;if(c){let e=window.getComputedStyle(c);e&&e.background&&(l=e.background)}yield new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,s),yield new Promise(requestAnimationFrame);let u=t.map(e=>e.scrollHeight),d=[],f=t[0].parentNode,p=1;t.forEach(function(t,r){if(t.classList.contains(`stack`)===!1){let c=(i-o)/2,f=(a-s)/2,m=u[r],h=Math.max(Math.ceil(m/a),1);h=Math.min(h,e.pdfMaxPagesPerSlide),(h===1&&e.center||t.classList.contains(`center`))&&(f=Math.max((a-m)/2,0));let g=document.createElement(`div`);if(d.push(g),g.className=`pdf-page`,g.style.height=(a+e.pdfPageHeightOffset)*h+`px`,l&&(g.style.background=l),g.appendChild(t),t.style.left=c+`px`,t.style.top=f+`px`,t.style.width=o+`px`,this.Reveal.slideContent.layout(t),t.slideBackgroundElement&&g.insertBefore(t.slideBackgroundElement,t),e.showNotes){let n=this.Reveal.getSlideNotes(t);if(n){let t=typeof e.showNotes==`string`?e.showNotes:`inline`,r=document.createElement(`div`);r.classList.add(`speaker-notes`),r.classList.add(`speaker-notes-pdf`),r.setAttribute(`data-layout`,t),r.innerHTML=n,t===`separate-page`?d.push(r):(r.style.left=`8px`,r.style.bottom=`8px`,r.style.width=i-16+`px`,g.appendChild(r))}}if(n){let e=document.createElement(`div`);e.classList.add(`slide-number`),e.classList.add(`slide-number-pdf`),e.innerHTML=p++,g.appendChild(e)}if(e.pdfSeparateFragments){let e=this.Reveal.fragments.sort(g.querySelectorAll(`.fragment`),!0),t;e.forEach(function(e,r){t&&t.forEach(function(e){e.classList.remove(`current-fragment`)}),e.forEach(function(e){e.classList.add(`visible`,`current-fragment`)},this);let i=g.cloneNode(!0);if(n){let e=i.querySelector(`.slide-number-pdf`),t=r+1;e.innerHTML+=`.`+t}d.push(i),t=e},this),e.forEach(function(e){e.forEach(function(e){e.classList.remove(`visible`,`current-fragment`)})})}else R(g,`.fragment:not(.fade-out)`).forEach(function(e){e.classList.add(`visible`)})}},this),yield new Promise(requestAnimationFrame),d.forEach(e=>f.appendChild(e)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:`pdf-ready`}),c.classList.remove(`loading-scroll-mode`)})}isActive(){return this.Reveal.getConfig().view===`print`}},Ze=class{constructor(e){this.Reveal=e}configure(e,t){e.fragments===!1?this.disable():t.fragments===!1&&this.enable()}disable(){R(this.Reveal.getSlidesElement(),`.fragment`).forEach(e=>{e.classList.add(`visible`),e.classList.remove(`current-fragment`)})}enable(){R(this.Reveal.getSlidesElement(),`.fragment`).forEach(e=>{e.classList.remove(`visible`),e.classList.remove(`current-fragment`)})}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(`.fragment:not(.disabled)`),n=e.querySelectorAll(`.fragment:not(.disabled):not(.visible)`);return{prev:t.length-n.length>0,next:!!n.length}}else return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let n=[],r=[],i=[];e.forEach(e=>{if(e.hasAttribute(`data-fragment-index`)){let t=parseInt(e.getAttribute(`data-fragment-index`),10);n[t]||(n[t]=[]),n[t].push(e)}else r.push([e])}),n=n.concat(r);let a=0;return n.forEach(e=>{e.forEach(e=>{i.push(e),e.setAttribute(`data-fragment-index`,a)}),a++}),t===!0?n:i}sortAll(){this.Reveal.getHorizontalSlides().forEach(e=>{let t=R(e,`section`);t.forEach((e,t)=>{this.sort(e.querySelectorAll(`.fragment`))},this),t.length===0&&this.sort(e.querySelectorAll(`.fragment`))})}update(e,t,n=this.Reveal.getCurrentSlide()){let r={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(t||=this.sort(n.querySelectorAll(`.fragment`)),t.length)){let i=0;if(typeof e!=`number`){let t=this.sort(n.querySelectorAll(`.fragment.visible`)).pop();t&&(e=parseInt(t.getAttribute(`data-fragment-index`)||0,10))}Array.from(t).forEach((t,n)=>{if(t.hasAttribute(`data-fragment-index`)&&(n=parseInt(t.getAttribute(`data-fragment-index`),10)),i=Math.max(i,n),n<=e){let i=t.classList.contains(`visible`);t.classList.add(`visible`),t.classList.remove(`current-fragment`),n===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(t)),t.classList.add(`current-fragment`),this.Reveal.slideContent.startEmbeddedContent(t)),i||(r.shown.push(t),this.Reveal.dispatchEvent({target:t,type:`visible`,bubbles:!1}))}else{let e=t.classList.contains(`visible`);t.classList.remove(`visible`),t.classList.remove(`current-fragment`),e&&(this.Reveal.slideContent.stopEmbeddedContent(t),r.hidden.push(t),this.Reveal.dispatchEvent({target:t,type:`hidden`,bubbles:!1}))}}),e=typeof e==`number`?e:-1,e=Math.max(Math.min(e,i),-1),n.setAttribute(`data-fragment`,e)}return r.hidden.length&&this.Reveal.dispatchEvent({type:`fragmenthidden`,data:{fragment:r.hidden[0],fragments:r.hidden}}),r.shown.length&&this.Reveal.dispatchEvent({type:`fragmentshown`,data:{fragment:r.shown[0],fragments:r.shown}}),r}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(`.fragment`))}goto(e,t=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let r=this.sort(n.querySelectorAll(`.fragment:not(.disabled)`));if(r.length){if(typeof e!=`number`){let t=this.sort(n.querySelectorAll(`.fragment:not(.disabled).visible`)).pop();e=t?parseInt(t.getAttribute(`data-fragment-index`)||0,10):-1}e+=t;let i=this.update(e,r);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!!(i.shown.length||i.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Qe=class{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add(`overview`),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),R(this.Reveal.getRevealElement(),G).forEach(e=>{e.classList.contains(`stack`)||e.addEventListener(`click`,this.onSlideClicked,!0)});let e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+70,this.overviewSlideHeight=e.height+70,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();let t=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:`overviewshown`,data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((e,t)=>{e.setAttribute(`data-index-h`,t),z(e,`translate3d(`+t*this.overviewSlideWidth+`px, 0, 0)`),e.classList.contains(`stack`)&&R(e,`section`).forEach((e,n)=>{e.setAttribute(`data-index-h`,t),e.setAttribute(`data-index-v`,n),z(e,`translate3d(0, `+n*this.overviewSlideHeight+`px, 0)`)})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e,t)=>{z(e,`translate3d(`+t*this.overviewSlideWidth+`px, 0, 0)`),R(e,`.slide-background`).forEach((e,t)=>{z(e,`translate3d(0, `+t*this.overviewSlideHeight+`px, 0)`)})})}update(){let e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:[`scale(`+t+`)`,`translateX(`+-n.h*this.overviewSlideWidth+`px)`,`translateY(`+-n.v*this.overviewSlideHeight+`px)`].join(` `)})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove(`overview`),this.Reveal.getRevealElement().classList.add(`overview-deactivating`),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove(`overview-deactivating`)},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),R(this.Reveal.getRevealElement(),G).forEach(e=>{z(e,``),e.removeEventListener(`click`,this.onSlideClicked,!0)}),R(this.Reveal.getBackgroundsElement(),`.slide-background`).forEach(e=>{z(e,``)}),this.Reveal.transformSlides({overview:``});let e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:`overviewhidden`,data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e==`boolean`?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains(`disabled`)&&(this.deactivate(),t.nodeName.match(/section/gi))){let e=parseInt(t.getAttribute(`data-index-h`),10),n=parseInt(t.getAttribute(`data-index-v`),10);this.Reveal.slide(e,n)}}}},$e=class{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(e,t){e.navigationMode===`linear`?(this.shortcuts[`&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J`]=`Next slide`,this.shortcuts[`&#8592;  ,  &#8593;  ,  P  ,  H  ,  K`]=`Previous slide`):(this.shortcuts[`N  ,  SPACE`]=`Next slide`,this.shortcuts[`P  ,  Shift SPACE`]=`Previous slide`,this.shortcuts[`&#8592;  ,  H`]=`Navigate left`,this.shortcuts[`&#8594;  ,  L`]=`Navigate right`,this.shortcuts[`&#8593;  ,  K`]=`Navigate up`,this.shortcuts[`&#8595;  ,  J`]=`Navigate down`),this.shortcuts[`Alt + &#8592;/&#8593/&#8594;/&#8595;`]=`Navigate without fragments`,this.shortcuts[`Shift + &#8592;/&#8593/&#8594;/&#8595;`]=`Jump to first/last slide`,this.shortcuts[`B  ,  .`]=`Pause`,this.shortcuts.F=`Fullscreen`,this.shortcuts.G=`Jump to slide`,this.shortcuts[`ESC, O`]=`Slide overview`}bind(){document.addEventListener(`keydown`,this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener(`keydown`,this.onDocumentKeyDown,!1)}addKeyBinding(e,t){typeof e==`object`&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(typeof t.keyboardCondition==`function`&&t.keyboardCondition(e)===!1||t.keyboardCondition===`focused`&&!this.Reveal.isFocused())return!0;let n=e.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let i=document.activeElement&&document.activeElement.isContentEditable===!0,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),s=!([32,37,38,39,40,63,78,80,191].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(i||a||o||s)return;let c=[66,86,190,191,112],l;if(typeof t.keyboard==`object`)for(l in t.keyboard)t.keyboard[l]===`togglePause`&&c.push(parseInt(l,10));if(this.Reveal.isOverlayOpen()&&![`Escape`,`f`,`c`,`b`,`.`].includes(e.key)||this.Reveal.isPaused()&&c.indexOf(n)===-1)return!1;let u=t.navigationMode===`linear`||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),d=!1;if(typeof t.keyboard==`object`){for(l in t.keyboard)if(parseInt(l,10)===n){let n=t.keyboard[l];typeof n==`function`?n.apply(null,[e]):typeof n==`string`&&typeof this.Reveal[n]==`function`&&this.Reveal[n].call(),d=!0}}if(d===!1){for(l in this.bindings)if(parseInt(l,10)===n){let t=this.bindings[l].callback;typeof t==`function`?t.apply(null,[e]):typeof t==`string`&&typeof this.Reveal[t]==`function`&&this.Reveal[t].call(),d=!0}}d===!1&&(d=!0,n===80||n===33?this.Reveal.prev({skipFragments:e.altKey}):n===78||n===34?this.Reveal.next({skipFragments:e.altKey}):n===72||n===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&u?t.rtl?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):n===76||n===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&u?t.rtl?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):n===75||n===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&u?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):n===74||n===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&u?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):[58,59,66,86,190].includes(n)||n===191&&!e.shiftKey?this.Reveal.togglePause():n===70?Se(t.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):n===71?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():(n===63||n===191)&&e.shiftKey||n===112?this.Reveal.toggleHelp():d=!1),d?e.preventDefault&&e.preventDefault():n===27||n===79?(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()):n===13&&this.Reveal.overview.isActive()&&(this.Reveal.overview.deactivate(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}},et=class{constructor(e){_e(this,`MAX_REPLACE_STATE_FREQUENCY`,1e3),this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener(`hashchange`,this.onWindowHashChange,!1)}unbind(){window.removeEventListener(`hashchange`,this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash,t={}){let n=e.replace(/^#\/?/,``),r=n.split(`/`);if(!/^[0-9]*$/.test(r[0])&&n.length){let e,t;/\/[-\d]+$/g.test(n)&&(t=parseInt(n.split(`/`).pop(),10),t=isNaN(t)?void 0:t,n=n.split(`/`).shift());try{let t=decodeURIComponent(n);e=(document.getElementById(t)||document.querySelector(`[data-id="${t}"]`)).closest(`.slides section`)}catch{}if(e)return ge(L({},this.Reveal.getIndices(e)),{f:t})}else{let e=this.Reveal.getConfig(),n=e.hashOneBasedIndex||t.oneBasedIndex?1:0,i=parseInt(r[0],10)-n||0,a=parseInt(r[1],10)-n||0,o;return e.fragmentInURL&&(o=parseInt(r[2],10),isNaN(o)&&(o=void 0)),{h:i,v:a,f:o}}return null}readURL(){let e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?(t.h!==e.h||t.v!==e.v||t.f!==void 0)&&this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e==`number`)this.writeURLTimeout=setTimeout(this.writeURL,e);else if(n){let e=this.getHash();t.history?window.location.hash=e:t.hash&&(e===`/`?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState(`#`+e))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout(()=>this.replaceState(e),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t=`/`,n=e||this.Reveal.getCurrentSlide(),r=n?n.getAttribute(`id`):null;r&&=encodeURIComponent(r);let i=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(i.f=void 0),typeof r==`string`&&r.length)t=`/`+r,i.f>=0&&(t+=`/`+i.f);else{let e=this.Reveal.getConfig().hashOneBasedIndex?1:0;(i.h>0||i.v>0||i.f>=0)&&(t+=i.h+e),(i.v>0||i.f>=0)&&(t+=`/`+(i.v+e)),i.f>=0&&(t+=`/`+i.f)}return t}onWindowHashChange(e){this.readURL()}},tt=class{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){let e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement(`aside`),this.element.className=`controls`,this.element.innerHTML=`<button class="navigate-left" aria-label="${e?`next slide`:`previous slide`}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e?`previous slide`:`next slide`}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=R(t,`.navigate-left`),this.controlsRight=R(t,`.navigate-right`),this.controlsUp=R(t,`.navigate-up`),this.controlsDown=R(t,`.navigate-down`),this.controlsPrev=R(t,`.navigate-prev`),this.controlsNext=R(t,`.navigate-next`),this.controlsFullscreen=R(t,`.enter-fullscreen`),this.controlsRightArrow=this.element.querySelector(`.navigate-right`),this.controlsLeftArrow=this.element.querySelector(`.navigate-left`),this.controlsDownArrow=this.element.querySelector(`.navigate-down`)}configure(e,t){let n=e.controls===`speaker`||e.controls===`speaker-only`;this.element.style.display=e.controls&&(!n||this.Reveal.isSpeakerNotes())?`block`:`none`,this.element.setAttribute(`data-controls-layout`,e.controlsLayout),this.element.setAttribute(`data-controls-back-arrows`,e.controlsBackArrows)}bind(){let e=[`touchstart`,`click`];Ae&&(e=[`touchend`]),e.forEach(e=>{this.controlsLeft.forEach(t=>t.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.addEventListener(e,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(t=>t.addEventListener(e,this.onEnterFullscreen,!1))})}unbind(){[`touchstart`,`touchend`,`click`].forEach(e=>{this.controlsLeft.forEach(t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.removeEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.removeEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.removeEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.removeEventListener(e,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(t=>t.removeEventListener(e,this.onEnterFullscreen,!1))})}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(e=>{e.classList.remove(`enabled`,`fragmented`),e.setAttribute(`disabled`,`disabled`)}),e.left&&this.controlsLeft.forEach(e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)}),e.right&&this.controlsRight.forEach(e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)}),e.up&&this.controlsUp.forEach(e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)}),e.down&&this.controlsDown.forEach(e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)}),(e.left||e.up)&&this.controlsPrev.forEach(e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)}),(e.right||e.down)&&this.controlsNext.forEach(e=>{e.classList.add(`enabled`),e.removeAttribute(`disabled`)});let t=this.Reveal.getCurrentSlide();if(t){let e=this.Reveal.fragments.availableRoutes();e.prev&&this.controlsPrev.forEach(e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)}),e.next&&this.controlsNext.forEach(e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)});let n=this.Reveal.isVerticalSlide(t),r=n&&t.parentElement&&t.parentElement.querySelectorAll(`:scope > section`).length>1;n&&r?(e.prev&&this.controlsUp.forEach(e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)}),e.next&&this.controlsDown.forEach(e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)})):(e.prev&&this.controlsLeft.forEach(e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)}),e.next&&this.controlsRight.forEach(e=>{e.classList.add(`fragmented`,`enabled`),e.removeAttribute(`disabled`)}))}if(this.Reveal.getConfig().controlsTutorial){let t=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add(`highlight`):(this.controlsDownArrow.classList.remove(`highlight`),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&t.v===0?this.controlsLeftArrow.classList.add(`highlight`):this.controlsLeftArrow.classList.remove(`highlight`):!this.Reveal.hasNavigatedHorizontally()&&e.right&&t.v===0?this.controlsRightArrow.classList.add(`highlight`):this.controlsRightArrow.classList.remove(`highlight`))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode===`linear`?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode===`linear`?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(e){let t=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();Se(t.embedded?n:n.parentElement)}},nt=class{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement(`div`),this.element.className=`progress`,this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement(`span`),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?`block`:`none`}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener(`click`,this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener(`click`,this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform=`scaleX(`+e+`)`}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),n=t.length,r=Math.floor(e.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(r=n-r);let i=this.Reveal.getIndices(t[r]);this.Reveal.slide(i.h,i.v)}destroy(){this.element.remove()}},rt=class{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?document.addEventListener(`wheel`,this.onDocumentMouseScroll,!1):document.removeEventListener(`wheel`,this.onDocumentMouseScroll,!1),e.hideInactiveCursor?(document.addEventListener(`mousemove`,this.onDocumentCursorActive,!1),document.addEventListener(`mousedown`,this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener(`mousemove`,this.onDocumentCursorActive,!1),document.removeEventListener(`mousedown`,this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor=``)}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor=`none`)}destroy(){this.showCursor(),document.removeEventListener(`wheel`,this.onDocumentMouseScroll,!1),document.removeEventListener(`mousemove`,this.onDocumentCursorActive,!1),document.removeEventListener(`mousedown`,this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}},it=(e,t)=>{let n=document.createElement(`script`);n.type=`text/javascript`,n.async=!1,n.defer=!1,n.src=e,typeof t==`function`&&(n.onload=e=>{e.type===`load`&&(n.onload=n.onerror=null,t())},n.onerror=e=>{n.onload=n.onerror=null,t(Error(`Failed loading script: `+n.src+`
`+e))});let r=document.querySelector(`head`);r&&r.insertBefore(n,r.lastChild)},at=class{constructor(e){this.Reveal=e,this.state=`idle`,this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state=`loading`,e.forEach(this.registerPlugin.bind(this)),new Promise(e=>{let n=[],r=0;if(t.forEach(e=>{(!e.condition||e.condition())&&(e.async?this.asyncDependencies.push(e):n.push(e))}),n.length){r=n.length;let t=t=>{t&&typeof t.callback==`function`&&t.callback(),--r===0&&this.initPlugins().then(e)};n.forEach(e=>{typeof e.id==`string`?(this.registerPlugin(e),t(e)):typeof e.src==`string`?it(e.src,()=>t(e)):(console.warn(`Unrecognized plugin format`,e),t())})}else this.initPlugins().then(e)})}initPlugins(){return new Promise(e=>{let t=Object.values(this.registeredPlugins),n=t.length;if(n===0)this.loadAsync().then(e);else{let r,i=()=>{--n===0?this.loadAsync().then(e):r()},a=0;r=()=>{let e=t[a++];if(typeof e.init==`function`){let t=e.init(this.Reveal);t&&typeof t.then==`function`?t.then(i):i()}else i()},r()}})}loadAsync(){return this.state=`loaded`,this.asyncDependencies.length&&this.asyncDependencies.forEach(e=>{it(e.src,e.callback)}),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]==`string`?(e=arguments[1],e.id=arguments[0]):typeof e==`function`&&(e=e());let t=e.id;typeof t==`string`?this.registeredPlugins[t]===void 0?(this.registeredPlugins[t]=e,this.state===`loaded`&&typeof e.init==`function`&&e.init(this.Reveal)):console.warn(`reveal.js: "`+t+`" plugin has already been registered`):console.warn(`Unrecognized plugin format; can't find plugin.id`,e)}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(e=>{typeof e.destroy==`function`&&e.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}},ot=class{constructor(e){this.Reveal=e,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector=`[data-preview-image], [data-preview-video]`,this.stateProps=[`previewIframe`,`previewImage`,`previewVideo`,`previewFit`],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector=`a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])`:this.iframeTriggerSelector=`[data-preview-link]:not([data-preview-link=false])`;let e=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,t=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;e||t?this.Reveal.getSlidesElement().addEventListener(`click`,this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener(`click`,this.onSlidesClicked,!1)}createOverlay(e){this.dom=document.createElement(`div`),this.dom.classList.add(`r-overlay`),this.dom.classList.add(e),this.viewport=document.createElement(`div`),this.viewport.classList.add(`r-overlay-viewport`),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(e){this.close(),this.state={previewIframe:e},this.createOverlay(`r-overlay-preview`),this.dom.dataset.state=`loading`,this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-header-button r-overlay-external" href="${e}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-header-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${e}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector(`iframe`).addEventListener(`load`,e=>{this.dom.dataset.state=`loaded`},!1),this.dom.querySelector(`.r-overlay-close`).addEventListener(`click`,e=>{this.close(),e.preventDefault()},!1),this.dom.querySelector(`.r-overlay-external`).addEventListener(`click`,e=>{this.close()},!1),this.Reveal.dispatchEvent({type:`previewiframe`,data:{url:e}})}previewMedia(e,t,n){if(t!==`image`&&t!==`video`){console.warn(`Please specify a valid media type to preview (image|video)`);return}this.close(),n||=`scale-down`,this.createOverlay(`r-overlay-preview`),this.dom.dataset.state=`loading`,this.dom.dataset.previewFit=n,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;let r=this.dom.querySelector(`.r-overlay-content`);if(t===`image`){this.state={previewImage:e,previewFit:n};let t=document.createElement(`img`,{});t.src=e,r.appendChild(t),t.addEventListener(`load`,()=>{this.dom.dataset.state=`loaded`},!1),t.addEventListener(`error`,()=>{this.dom.dataset.state=`error`,r.innerHTML=`<span class="r-overlay-error">Unable to load image.</span>`},!1),this.dom.style.cursor=`zoom-out`,this.dom.addEventListener(`click`,e=>{this.close()},!1),this.Reveal.dispatchEvent({type:`previewimage`,data:{url:e}})}else if(t===`video`){this.state={previewVideo:e,previewFit:n};let t=document.createElement(`video`);t.autoplay=this.dom.dataset.previewAutoplay!==`false`,t.controls=this.dom.dataset.previewControls!==`false`,t.loop=this.dom.dataset.previewLoop===`true`,t.muted=this.dom.dataset.previewMuted===`true`,t.playsInline=!0,t.src=e,r.appendChild(t),t.addEventListener(`loadeddata`,()=>{this.dom.dataset.state=`loaded`},!1),t.addEventListener(`error`,()=>{this.dom.dataset.state=`error`,r.innerHTML=`<span class="r-overlay-error">Unable to load video.</span>`},!1),this.Reveal.dispatchEvent({type:`previewvideo`,data:{url:e}})}else throw Error(`Please specify a valid media type to preview`);this.dom.querySelector(`.r-overlay-close`).addEventListener(`click`,e=>{this.close(),e.preventDefault()},!1)}previewImage(e,t){this.previewMedia(e,`image`,t)}previewVideo(e,t){this.previewMedia(e,`video`,t)}toggleHelp(e){typeof e==`boolean`?e?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay(`r-overlay-help`);let e=`<p class="title">Keyboard Shortcuts</p>`,t=this.Reveal.keyboard.getShortcuts(),n=this.Reveal.keyboard.getBindings();e+=`<table><th>KEY</th><th>ACTION</th>`;for(let n in t)e+=`<tr><td>${n}</td><td>${t[n]}</td></tr>`;for(let t in n)n[t].key&&n[t].description&&(e+=`<tr><td>${n[t].key}</td><td>${n[t].description}</td></tr>`);e+=`</table>`,this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${e}</div>
				</div>
			`,this.dom.querySelector(`.r-overlay-close`).addEventListener(`click`,e=>{this.close(),e.preventDefault()},!1),this.Reveal.dispatchEvent({type:`showhelp`})}}isOpen(){return!!this.dom}close(){return this.dom?(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:`closeoverlay`}),!0):!1}getState(){return this.state}setState(e){this.stateProps.every(t=>this.state[t]===e[t])||(e.previewIframe?this.previewIframe(e.previewIframe):e.previewImage?this.previewImage(e.previewImage,e.previewFit):e.previewVideo?this.previewVideo(e.previewVideo,e.previewFit):this.close())}onSlidesClicked(e){let t=e.target,n=t.closest(this.iframeTriggerSelector),r=t.closest(this.mediaTriggerSelector);if(n){if(e.metaKey||e.shiftKey||e.altKey)return;let t=n.getAttribute(`data-preview-link`),r=typeof t==`string`&&t.startsWith(`http`)?t:n.getAttribute(`href`);r&&(this.previewIframe(r),e.preventDefault())}else if(r){if(r.hasAttribute(`data-preview-image`)){let t=r.dataset.previewImage||r.getAttribute(`src`);t&&(this.previewImage(t,r.dataset.previewFit),e.preventDefault())}else if(r.hasAttribute(`data-preview-video`)){let t=r.dataset.previewVideo||r.getAttribute(`src`);if(!t){let e=r.querySelector(`source`);e&&(t=e.getAttribute(`src`))}t&&(this.previewVideo(t,r.dataset.previewFit),e.preventDefault())}}}destroy(){this.close()}},J=40,st=class{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();`onpointerdown`in window?(e.addEventListener(`pointerdown`,this.onPointerDown,!1),e.addEventListener(`pointermove`,this.onPointerMove,!1),e.addEventListener(`pointerup`,this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener(`MSPointerDown`,this.onPointerDown,!1),e.addEventListener(`MSPointerMove`,this.onPointerMove,!1),e.addEventListener(`MSPointerUp`,this.onPointerUp,!1)):(e.addEventListener(`touchstart`,this.onTouchStart,!1),e.addEventListener(`touchmove`,this.onTouchMove,!1),e.addEventListener(`touchend`,this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener(`pointerdown`,this.onPointerDown,!1),e.removeEventListener(`pointermove`,this.onPointerMove,!1),e.removeEventListener(`pointerup`,this.onPointerUp,!1),e.removeEventListener(`MSPointerDown`,this.onPointerDown,!1),e.removeEventListener(`MSPointerMove`,this.onPointerMove,!1),e.removeEventListener(`MSPointerUp`,this.onPointerUp,!1),e.removeEventListener(`touchstart`,this.onTouchStart,!1),e.removeEventListener(`touchmove`,this.onTouchMove,!1),e.removeEventListener(`touchend`,this.onTouchEnd,!1)}isSwipePrevented(e){if(B(e,`video[controls], audio[controls]`))return!0;for(;e&&typeof e.hasAttribute==`function`;){if(e.hasAttribute(`data-prevent-swipe`))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.touchCaptured=!1,this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)Ae&&e.preventDefault();else{this.Reveal.onUserInput(e);let n=e.touches[0].clientX,r=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let i=this.Reveal.availableRoutes({includeFragments:!0}),a=n-this.touchStartX,o=r-this.touchStartY;a>J&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode===`linear`?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-J&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode===`linear`?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>J&&i.up?(this.touchCaptured=!0,t.navigationMode===`linear`?this.Reveal.prev():this.Reveal.up()):o<-J&&i.down&&(this.touchCaptured=!0,t.navigationMode===`linear`?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured&&!this.Reveal.slideContent.isAllowedToPlayAudio()&&this.Reveal.startEmbeddedContent(this.Reveal.getCurrentSlide()),this.touchCaptured=!1}onPointerDown(e){(e.pointerType===e.MSPOINTER_TYPE_TOUCH||e.pointerType===`touch`)&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){(e.pointerType===e.MSPOINTER_TYPE_TOUCH||e.pointerType===`touch`)&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){(e.pointerType===e.MSPOINTER_TYPE_TOUCH||e.pointerType===`touch`)&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}},ct=`focus`,lt=`blur`,ut=class{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener(`pointerdown`,this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener(`pointerdown`,this.onRevealPointerDown,!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!1)}focus(){this.state!==ct&&(this.Reveal.getRevealElement().classList.add(`focused`),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!1)),this.state=ct}blur(){this.state!==lt&&(this.Reveal.getRevealElement().classList.remove(`focused`),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!1)),this.state=lt}isFocused(){return this.state===ct}destroy(){this.Reveal.getRevealElement().classList.remove(`focused`)}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=V(e.target,`.reveal`);(!t||t!==this.Reveal.getRevealElement())&&this.blur()}},dt=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement(`div`),this.element.className=`speaker-notes`,this.element.setAttribute(`data-prevent-swipe`,``),this.element.setAttribute(`tabindex`,`0`),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute(`data-layout`,typeof e.showNotes==`string`?e.showNotes:`inline`)}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||`<span class="notes-placeholder">No notes on this slide.</span>`)}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add(`show-notes`):this.Reveal.getRevealElement().classList.remove(`show-notes`)}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll(`[data-notes], aside.notes`).length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute(`data-notes`))return e.getAttribute(`data-notes`);let t=e.querySelectorAll(`aside.notes`);return t?Array.from(t).map(e=>e.innerHTML).join(`
`):null}destroy(){this.element.remove()}},ft=class{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement(`canvas`),this.canvas.className=`playback`,this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+`px`,this.canvas.style.height=this.diameter2+`px`,this.context=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.render()}setPlaying(e){let t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){let e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,n=this.diameter2,r=this.diameter2;this.progressOffset+=(1-this.progressOffset)*.1;let i=-Math.PI/2+Math.PI*2*e,a=-Math.PI/2+this.progressOffset*(Math.PI*2);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,t+4,0,Math.PI*2,!1),this.context.fillStyle=`rgba( 0, 0, 0, 0.4 )`,this.context.fill(),this.context.beginPath(),this.context.arc(n,r,t,0,Math.PI*2,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle=`rgba( 255, 255, 255, 0.2 )`,this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,t,a,i,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle=`#fff`,this.context.stroke()),this.context.translate(n-28/2,r-28/2),this.playing?(this.context.fillStyle=`#fff`,this.context.fillRect(0,0,28/2-4,28),this.context.fillRect(18,0,28/2-4,28)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,28/2),this.context.lineTo(0,28),this.context.fillStyle=`#fff`,this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}},pt={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:`bottom-right`,controlsBackArrows:`faded`,progress:!0,slideNumber:!1,showSlideNumber:`all`,hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:`default`,shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,mouseWheel:!1,previewLinks:!1,viewDistance:3,mobileViewDistance:2,display:`block`,hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:`ease`,autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:[`opacity`,`color`,`background-color`,`padding`,`font-size`,`line-height`,`letter-spacing`,`border-width`,`border-color`,`border-radius`,`outline`,`outline-offset`],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:`slide`,transitionSpeed:`default`,backgroundTransition:`fade`,parallaxBackgroundImage:``,parallaxBackgroundSize:``,parallaxBackgroundRepeat:``,parallaxBackgroundPosition:``,parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:`full`,scrollSnap:`mandatory`,scrollProgress:`auto`,scrollActivationWidth:435,pdfMaxPagesPerSlide:1/0,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,dependencies:[],plugins:[]},mt=`6.0.0`;function ht(e,t){arguments.length<2&&(t=arguments[0],e=document.querySelector(`.reveal`));let n={},r={},i=!1,a=!1,o,s,c,l,u={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},d=[],f=1,p={layout:``,overview:``},m={},h=`idle`,g=0,_,v=0,ee=-1,y=!1,b=new je(n),x=new ze(n),S=new Be(n),C=new We(n),w=new He(n),T=new Ye(n),E=new Xe(n),D=new Ze(n),O=new Qe(n),k=new $e(n),A=new et(n),j=new tt(n),M=new nt(n),te=new rt(n),N=new at(n),P=new ot(n),F=new ut(n),ne=new st(n),I=new dt(n);function re(a){if(!e)throw`Unable to find presentation root (<div class="reveal">).`;if(i)throw`Reveal.js has already been initialized.`;if(i=!0,m.wrapper=e,m.slides=e.querySelector(`.slides`),!m.slides)throw`Unable to find slides container (<div class="slides">).`;return r=L(L(L(L(L({},pt),r),t),a),Te()),/print-pdf/gi.test(window.location.search)&&(r.view=`print`),ie(),window.addEventListener(`load`,W,!1),N.load(r.plugins,r.dependencies).then(ae),new Promise(e=>n.on(`ready`,e))}function ie(){r.embedded===!0?m.viewport=V(e,`.reveal-viewport`)||e:(m.viewport=document.body,document.documentElement.classList.add(`reveal-full-page`)),m.viewport.classList.add(`reveal-viewport`)}function ae(){i!==!1&&(a=!0,se(),ce(),he(),pe(),me(),bt(),_e(),w.update(!0),oe(),A.readURL(),setTimeout(()=>{m.slides.classList.remove(`no-transition`),m.wrapper.classList.add(`ready`),H({type:`ready`,data:{indexh:o,indexv:s,currentSlide:l}})},1))}function oe(){let e=r.view===`print`,t=r.view===`scroll`||r.view===`reader`;(e||t)&&(e?B():ne.unbind(),m.viewport.classList.add(`loading-scroll-mode`),e?document.readyState===`complete`?E.activate():window.addEventListener(`load`,()=>E.activate()):T.activate())}function se(){r.showHiddenSlides||R(m.wrapper,`section[data-visibility="hidden"]`).forEach(e=>{let t=e.parentNode;t.childElementCount===1&&/section/i.test(t.nodeName)?t.remove():e.remove()})}function ce(){m.slides.classList.add(`no-transition`),U?m.wrapper.classList.add(`no-hover`):m.wrapper.classList.remove(`no-hover`),w.render(),x.render(),S.render(),j.render(),M.render(),I.render(),m.pauseOverlay=Ce(m.wrapper,`div`,`pause-overlay`,r.controls?`<button class="resume-button">Resume presentation</button>`:null),m.statusElement=le(),m.wrapper.setAttribute(`role`,`application`)}function le(){let e=m.wrapper.querySelector(`.aria-status`);return e||(e=document.createElement(`div`),e.style.position=`absolute`,e.style.height=`1px`,e.style.width=`1px`,e.style.overflow=`hidden`,e.style.clip=`rect( 1px, 1px, 1px, 1px )`,e.classList.add(`aria-status`),e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-atomic`,`true`),m.wrapper.appendChild(e)),e}function ue(e){m.statusElement.textContent=e}function de(e){let t=``;if(e.nodeType===3)t+=e.textContent.trim();else if(e.nodeType===1){let n=e.getAttribute(`aria-hidden`),r=window.getComputedStyle(e).display===`none`;if(n!==`true`&&!r){if(e.tagName===`IMG`||e.tagName===`VIDEO`){let n=e.getAttribute(`alt`);n&&(t+=fe(n))}Array.from(e.childNodes).forEach(e=>{t+=de(e)}),[`P`,`DIV`,`UL`,`OL`,`LI`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`BLOCKQUOTE`].includes(e.tagName)&&t.trim()!==``&&(t=fe(t))}}return t=t.trim(),t===``?``:t+` `}function fe(e){let t=e.trim();return t===``?e:/[.!?]$/.test(t)?t:t+`.`}function pe(){setInterval(()=>{(!T.isActive()&&m.wrapper.scrollTop!==0||m.wrapper.scrollLeft!==0)&&(m.wrapper.scrollTop=0,m.wrapper.scrollLeft=0)},1e3)}function me(){document.addEventListener(`fullscreenchange`,en),document.addEventListener(`webkitfullscreenchange`,en)}function he(){r.postMessage&&window.addEventListener(`message`,Yt,!1)}function _e(e){let t=L({},r);if(typeof e==`object`&&ye(r,e),n.isReady()===!1)return;let i=m.wrapper.querySelectorAll(G).length;m.wrapper.classList.remove(t.transition),m.wrapper.classList.add(r.transition),m.wrapper.setAttribute(`data-transition-speed`,r.transitionSpeed),m.wrapper.setAttribute(`data-background-transition`,r.backgroundTransition),m.viewport.style.setProperty(`--slide-width`,typeof r.width==`string`?r.width:r.width+`px`),m.viewport.style.setProperty(`--slide-height`,typeof r.height==`string`?r.height:r.height+`px`),r.shuffle&&xt(),be(m.wrapper,`embedded`,r.embedded),be(m.wrapper,`rtl`,r.rtl),be(m.wrapper,`center`,r.center),r.pause===!1&&Je(),C.reset(),_&&=(_.destroy(),null),i>1&&r.autoSlide&&r.autoSlideStoppable&&(_=new ft(m.wrapper,()=>Math.min(Math.max((Date.now()-ee)/g,0),1)),_.on(`click`,tn),y=!1),r.navigationMode===`default`?m.wrapper.removeAttribute(`data-navigation-mode`):m.wrapper.setAttribute(`data-navigation-mode`,r.navigationMode),I.configure(r,t),F.configure(r,t),te.configure(r,t),j.configure(r,t),M.configure(r,t),k.configure(r,t),D.configure(r,t),x.configure(r,t),vt()}function ve(){window.addEventListener(`resize`,Qt,!1),r.touch&&ne.bind(),r.keyboard&&k.bind(),r.progress&&M.bind(),r.respondToHashChanges&&A.bind(),j.bind(),F.bind(),m.slides.addEventListener(`click`,Zt,!1),m.slides.addEventListener(`transitionend`,Xt,!1),m.pauseOverlay.addEventListener(`click`,Je,!1),r.focusBodyOnPageVisibilityChange&&document.addEventListener(`visibilitychange`,$t,!1)}function B(){ne.unbind(),F.unbind(),k.unbind(),j.unbind(),M.unbind(),A.unbind(),window.removeEventListener(`resize`,Qt,!1),m.slides.removeEventListener(`click`,Zt,!1),m.slides.removeEventListener(`transitionend`,Xt,!1),m.pauseOverlay.removeEventListener(`click`,Je,!1)}function Se(){i=!1,a!==!1&&(B(),zt(),I.destroy(),F.destroy(),P.destroy(),N.destroy(),te.destroy(),j.destroy(),M.destroy(),w.destroy(),x.destroy(),S.destroy(),document.removeEventListener(`fullscreenchange`,en),document.removeEventListener(`webkitfullscreenchange`,en),document.removeEventListener(`visibilitychange`,$t,!1),window.removeEventListener(`message`,Yt,!1),window.removeEventListener(`load`,W,!1),m.pauseOverlay&&m.pauseOverlay.remove(),m.statusElement&&m.statusElement.remove(),document.documentElement.classList.remove(`reveal-full-page`),m.wrapper.classList.remove(`ready`,`center`,`has-horizontal-slides`,`has-vertical-slides`),m.wrapper.removeAttribute(`data-transition-speed`),m.wrapper.removeAttribute(`data-background-transition`),m.viewport.classList.remove(`reveal-viewport`),m.viewport.style.removeProperty(`--slide-width`),m.viewport.style.removeProperty(`--slide-height`),m.slides.style.removeProperty(`width`),m.slides.style.removeProperty(`height`),m.slides.style.removeProperty(`zoom`),m.slides.style.removeProperty(`left`),m.slides.style.removeProperty(`top`),m.slides.style.removeProperty(`bottom`),m.slides.style.removeProperty(`right`),m.slides.style.removeProperty(`transform`),Array.from(m.wrapper.querySelectorAll(G)).forEach(e=>{e.style.removeProperty(`display`),e.style.removeProperty(`top`),e.removeAttribute(`hidden`),e.removeAttribute(`aria-hidden`)}))}function we(t,n,r){e.addEventListener(t,n,r)}function De(t,n,r){e.removeEventListener(t,n,r)}function Oe(e){typeof e.layout==`string`&&(p.layout=e.layout),typeof e.overview==`string`&&(p.overview=e.overview),p.layout?z(m.slides,p.layout+` `+p.overview):z(m.slides,p.overview)}function H({target:e=m.wrapper,type:t,data:n,bubbles:r=!0}){let i=document.createEvent(`HTMLEvents`,1,2);return i.initEvent(t,r,!0),ye(i,n),e.dispatchEvent(i),e===m.wrapper&&Ae(t),i}function ke(e){H({type:`slidechanged`,data:{indexh:o,indexv:s,previousSlide:c,currentSlide:l,origin:e}})}function Ae(e,t){if(r.postMessageEvents&&window.parent!==window.self){let n={namespace:`reveal`,eventName:e,state:It()};ye(n,t),window.parent.postMessage(JSON.stringify(n),`*`)}}function W(){if(m.wrapper&&!E.isActive()){let e=m.viewport.offsetWidth,t=m.viewport.offsetHeight;if(!r.disableLayout){U&&!r.embedded&&document.documentElement.style.setProperty(`--vh`,window.innerHeight*.01+`px`);let n=T.isActive()?Ie(e,t):Ie(),i=f;Ne(r.width,r.height),m.slides.style.width=n.width+`px`,m.slides.style.height=n.height+`px`,f=Math.min(n.presentationWidth/n.width,n.presentationHeight/n.height),f=Math.max(f,r.minScale),f=Math.min(f,r.maxScale),f===1||T.isActive()?(m.slides.style.zoom=``,m.slides.style.left=``,m.slides.style.top=``,m.slides.style.bottom=``,m.slides.style.right=``,Oe({layout:``})):(m.slides.style.zoom=``,m.slides.style.left=`50%`,m.slides.style.top=`50%`,m.slides.style.bottom=`auto`,m.slides.style.right=`auto`,Oe({layout:`translate(-50%, -50%) scale(`+f+`)`}));let a=Array.from(m.wrapper.querySelectorAll(G));for(let e=0,t=a.length;e<t;e++){let t=a[e];t.style.display!==`none`&&(r.center||t.classList.contains(`center`)?t.classList.contains(`stack`)?t.style.top=0:t.style.top=Math.max((n.height-t.scrollHeight)/2,0)+`px`:t.style.top=``)}i!==f&&H({type:`resize`,data:{oldScale:i,scale:f,size:n}})}Fe(),m.viewport.style.setProperty(`--slide-scale`,f),m.viewport.style.setProperty(`--viewport-width`,e+`px`),m.viewport.style.setProperty(`--viewport-height`,t+`px`),T.layout(),M.update(),w.updateParallax(),O.isActive()&&O.update()}}function Ne(e,t){R(m.slides,`section > .stretch, section > .r-stretch`).forEach(n=>{let r=Ee(n,t);if(/(img|video)/gi.test(n.nodeName)){let t=n.naturalWidth||n.videoWidth,i=n.naturalHeight||n.videoHeight,a=Math.min(e/t,r/i);n.style.width=t*a+`px`,n.style.height=i*a+`px`}else n.style.width=e+`px`,n.style.height=r+`px`})}function Fe(){if(m.wrapper&&!r.disableLayout&&!E.isActive()&&typeof r.scrollActivationWidth==`number`&&r.view!==`scroll`){let e=Ie();e.presentationWidth>0&&e.presentationWidth<=r.scrollActivationWidth?T.isActive()||(w.create(),T.activate()):T.isActive()&&T.deactivate()}}function Ie(e,t){let n=r.width,i=r.height;r.disableLayout&&(n=m.slides.offsetWidth,i=m.slides.offsetHeight);let a={width:n,height:i,presentationWidth:e||m.wrapper.offsetWidth,presentationHeight:t||m.wrapper.offsetHeight};return a.presentationWidth-=a.presentationWidth*r.margin,a.presentationHeight-=a.presentationHeight*r.margin,typeof a.width==`string`&&/%$/.test(a.width)&&(a.width=parseInt(a.width,10)/100*a.presentationWidth),typeof a.height==`string`&&/%$/.test(a.height)&&(a.height=parseInt(a.height,10)/100*a.presentationHeight),a}function Le(e,t){typeof e==`object`&&typeof e.setAttribute==`function`&&e.setAttribute(`data-previous-indexv`,t||0)}function Re(e){if(typeof e==`object`&&typeof e.setAttribute==`function`&&e.classList.contains(`stack`)){let t=e.hasAttribute(`data-start-indexv`)?`data-start-indexv`:`data-previous-indexv`;return parseInt(e.getAttribute(t)||0,10)}return 0}function q(e=l){return e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function Ve(e=l){return e.classList.contains(`.stack`)||e.querySelector(`section`)!==null}function Ue(){return l&&q(l)?!l.nextElementSibling:!1}function Ge(){return o===0&&s===0}function Ke(){return l?!(l.nextElementSibling||q(l)&&l.parentNode.nextElementSibling):!1}function qe(){if(r.pause){let e=m.wrapper.classList.contains(`paused`);zt(),m.wrapper.classList.add(`paused`),e===!1&&H({type:`paused`})}}function Je(){let e=m.wrapper.classList.contains(`paused`);m.wrapper.classList.remove(`paused`),Rt(),e&&H({type:`resumed`})}function it(e){typeof e==`boolean`?e?qe():Je():J()?Je():qe()}function J(){return m.wrapper.classList.contains(`paused`)}function ct(e){typeof e==`boolean`?e?S.show():S.hide():S.isVisible()?S.hide():S.show()}function lt(e){typeof e==`boolean`?e?Vt():Bt():y?Vt():Bt()}function ht(){return!!(g&&!y)}function Y(t,n,i,a){if(H({type:`beforeslidechange`,data:{indexh:t===void 0?o:t,indexv:n===void 0?s:n,origin:a}}).defaultPrevented)return;c=l;let u=m.wrapper.querySelectorAll(K);if(T.isActive()){let e=T.getSlideByIndices(t,n);e&&T.scrollToSlide(e);return}if(u.length===0)return;n===void 0&&!O.isActive()&&(n=Re(u[t])),c&&c.parentNode&&c.parentNode.classList.contains(`stack`)&&Le(c.parentNode,s);let f=d.concat();d.length=0;let p=o||0,g=s||0;o=St(K,t===void 0?o:t),s=St(Me,n===void 0?s:n);let _=o!==p||s!==g;_||(c=null);let v=u[o],ee=v.querySelectorAll(`section`);e.classList.toggle(`is-vertical-slide`,ee.length>1),l=ee[s]||v;let y=!1;_&&c&&l&&!O.isActive()&&(h=`running`,y=gt(c,l,p,g),y&&m.slides.classList.add(`disable-slide-transitions`)),X(),W(),O.isActive()&&O.update(),i!==void 0&&D.goto(i),c&&c!==l&&(c.classList.remove(`present`),c.setAttribute(`aria-hidden`,`true`),Ge()&&setTimeout(()=>{kt().forEach(e=>{Le(e,0)})},0));e:for(let e=0,t=d.length;e<t;e++){for(let t=0;t<f.length;t++)if(f[t]===d[e]){f.splice(t,1);continue e}m.viewport.classList.add(d[e]),H({type:d[e]})}for(;f.length;)m.viewport.classList.remove(f.pop());_&&(b.afterSlideChanged(),ke(a)),(_||!c)&&(b.stopEmbeddedContent(c),b.startEmbeddedContent(l)),requestAnimationFrame(()=>{ue(de(l))}),M.update(),j.update(),I.update(),w.update(),w.updateParallax(),x.update(),D.update(),A.writeURL(),Rt(),y&&(setTimeout(()=>{m.slides.classList.remove(`disable-slide-transitions`)},0),r.autoAnimate&&C.run(c,l))}function gt(e,t,n,r){return e.hasAttribute(`data-auto-animate`)&&t.hasAttribute(`data-auto-animate`)&&e.getAttribute(`data-auto-animate-id`)===t.getAttribute(`data-auto-animate-id`)&&!(o>n||s>r?t:e).hasAttribute(`data-auto-animate-restart`)}function _t(e,t,n){let i=o||0;o=t,s=n;let a=l!==e;c=l,l=e,l&&c&&r.autoAnimate&&gt(c,l,i,s)&&C.run(c,l),a&&(b.afterSlideChanged(),c&&(b.stopEmbeddedContent(c),b.stopEmbeddedContent(c.slideBackgroundElement)),b.startEmbeddedContent(l),b.startEmbeddedContent(l.slideBackgroundElement)),requestAnimationFrame(()=>{ue(de(l))}),ke()}function vt(){B(),ve(),W(),g=r.autoSlide,Rt(),w.create(),A.writeURL(),r.sortFragmentsOnSync===!0&&D.sortAll(),o!==void 0&&(o=St(K,o),s=St(Me,s)),j.update(),M.update(),X(),I.update(),I.updateVisibility(),P.update(),w.update(!0),x.update(),b.formatEmbeddedContent(),r.autoPlayMedia===!1?b.stopEmbeddedContent(l,{unloadIframes:!1}):b.startEmbeddedContent(l),O.isActive()&&O.layout(),H({type:`sync`})}function yt(e=l){w.sync(e),D.sync(e),b.load(e),w.update(),I.update(),H({type:`slidesync`,data:{slide:e}})}function bt(){$().forEach(e=>{R(e,`section`).forEach((e,t)=>{t>0&&(e.classList.remove(`present`),e.classList.remove(`past`),e.classList.add(`future`),e.setAttribute(`aria-hidden`,`true`))})})}function xt(e=$()){e.forEach((t,n)=>{let r=e[Math.floor(Math.random()*e.length)];r.parentNode===t.parentNode&&t.parentNode.insertBefore(t,r);let i=t.querySelectorAll(`section`);i.length&&xt(i)})}function St(e,t){let n=R(m.wrapper,e),i=n.length,a=T.isActive()||E.isActive(),o=!1,s=!1;if(i){r.loop&&(t>=i&&(o=!0),t%=i,t<0&&(t=i+t,s=!0)),t=Math.max(Math.min(t,i-1),0);for(let e=0;e<i;e++){let i=n[e],c=r.rtl&&!q(i);if(i.classList.remove(`past`),i.classList.remove(`present`),i.classList.remove(`future`),i.setAttribute(`hidden`,``),i.setAttribute(`aria-hidden`,`true`),i.querySelector(`section`)&&i.classList.add(`stack`),a){i.classList.add(`present`);continue}e<t?(i.classList.add(c?`future`:`past`),r.fragments&&Ct(i)):e>t?(i.classList.add(c?`past`:`future`),r.fragments&&wt(i)):e===t&&r.fragments&&(o?wt(i):s&&Ct(i))}let e=n[t],c=e.classList.contains(`present`);e.classList.add(`present`),e.removeAttribute(`hidden`),e.removeAttribute(`aria-hidden`),c||H({target:e,type:`visible`,bubbles:!1});let l=e.getAttribute(`data-state`);l&&(d=d.concat(l.split(` `)))}else t=0;return t}function Ct(e){R(e,`.fragment`).forEach(e=>{e.classList.add(`visible`),e.classList.remove(`current-fragment`)})}function wt(e){R(e,`.fragment.visible`).forEach(e=>{e.classList.remove(`visible`,`current-fragment`)})}function X(){let e=$(),t=e.length,n,i;if(t&&o!==void 0){let a=O.isActive(),c=a?10:r.viewDistance;U&&(c=a?6:r.mobileViewDistance),E.isActive()&&(c=Number.MAX_VALUE);for(let l=0;l<t;l++){let u=e[l],d=R(u,`section`),f=d.length;if(n=Math.abs((o||0)-l)||0,r.loop&&(n=Math.abs(((o||0)-l)%(t-c))||0),n<c?b.load(u):b.unload(u),f){let e=a?0:Re(u);for(let t=0;t<f;t++){let r=d[t];i=Math.abs(l===(o||0)?(s||0)-t:t-e),n+i<c?b.load(r):b.unload(r)}}}jt()?m.wrapper.classList.add(`has-vertical-slides`):m.wrapper.classList.remove(`has-vertical-slides`),At()?m.wrapper.classList.add(`has-horizontal-slides`):m.wrapper.classList.remove(`has-horizontal-slides`)}}function Z({includeFragments:e=!1}={}){let t=m.wrapper.querySelectorAll(K),n=m.wrapper.querySelectorAll(Me),i={left:o>0,right:o<t.length-1,up:s>0,down:s<n.length-1};if(r.loop&&(t.length>1&&(i.left=!0,i.right=!0),n.length>1&&(i.up=!0,i.down=!0)),t.length>1&&r.navigationMode===`linear`&&(i.right=i.right||i.down,i.left=i.left||i.up),e===!0){let e=D.availableRoutes();i.left=i.left||e.prev,i.up=i.up||e.prev,i.down=i.down||e.next,i.right=i.right||e.next}if(r.rtl){let e=i.left;i.left=i.right,i.right=e}return i}function Q(e=l){let t=$(),n=0;e:for(let r=0;r<t.length;r++){let i=t[r],a=i.querySelectorAll(`section`);for(let t=0;t<a.length;t++){if(a[t]===e)break e;a[t].dataset.visibility!==`uncounted`&&n++}if(i===e)break;i.classList.contains(`stack`)===!1&&i.dataset.visibility!==`uncounted`&&n++}return n}function Tt(){let e=Nt(),t=Q();if(l){let e=l.querySelectorAll(`.fragment`);if(e.length>0){let n=l.querySelectorAll(`.fragment.visible`);t+=n.length/e.length*.9}}return Math.min(t/(e-1),1)}function Et(e){let t=o,n=s,r;if(e)if(T.isActive())t=parseInt(e.getAttribute(`data-index-h`),10),e.getAttribute(`data-index-v`)&&(n=parseInt(e.getAttribute(`data-index-v`),10));else{let r=q(e),i=r?e.parentNode:e,a=$();t=Math.max(a.indexOf(i),0),n=void 0,r&&(n=Math.max(R(e.parentNode,`section`).indexOf(e),0))}if(!e&&l&&l.querySelectorAll(`.fragment`).length>0){let e=l.querySelector(`.current-fragment`);r=e&&e.hasAttribute(`data-fragment-index`)?parseInt(e.getAttribute(`data-fragment-index`),10):l.querySelectorAll(`.fragment.visible`).length-1}return{h:t,v:n,f:r}}function Dt(){return R(m.wrapper,G+`:not(.stack):not([data-visibility="uncounted"])`)}function $(){return R(m.wrapper,K)}function Ot(){return R(m.wrapper,`.slides>section>section`)}function kt(){return R(m.wrapper,K+`.stack`)}function At(){return $().length>1}function jt(){return Ot().length>1}function Mt(){return Dt().map(e=>{let t={};for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t})}function Nt(){return Dt().length}function Pt(e,t){let n=$()[e],r=n&&n.querySelectorAll(`section`);return r&&r.length&&typeof t==`number`?r?r[t]:void 0:n}function Ft(e,t){let n=typeof e==`number`?Pt(e,t):e;if(n)return n.slideBackgroundElement}function It(){let e=Et();return L({indexh:e.h,indexv:e.v,indexf:e.f,paused:J(),overview:O.isActive()},P.getState())}function Lt(e){if(typeof e==`object`){Y(xe(e.indexh),xe(e.indexv),xe(e.indexf));let t=xe(e.paused),n=xe(e.overview);typeof t==`boolean`&&t!==J()&&it(t),typeof n==`boolean`&&n!==O.isActive()&&O.toggle(n),P.setState(e)}}function Rt(){if(zt(),l&&r.autoSlide!==!1){let e=l.querySelector(`.current-fragment[data-autoslide]`),t=e?e.getAttribute(`data-autoslide`):null,n=l.parentNode?l.parentNode.getAttribute(`data-autoslide`):null,i=l.getAttribute(`data-autoslide`);t?g=parseInt(t,10):i?g=parseInt(i,10):n?g=parseInt(n,10):(g=r.autoSlide,l.querySelectorAll(`.fragment`).length===0&&R(l,`video, audio`).forEach(e=>{e.hasAttribute(`data-autoplay`)&&g&&e.duration*1e3/e.playbackRate>g&&(g=e.duration*1e3/e.playbackRate+1e3)})),g&&!y&&!J()&&!O.isActive()&&(!Ke()||D.availableRoutes().next||r.loop===!0)&&(v=setTimeout(()=>{typeof r.autoSlideMethod==`function`?r.autoSlideMethod():qt(),Rt()},g),ee=Date.now()),_&&_.setPlaying(v!==-1)}}function zt(){clearTimeout(v),v=-1}function Bt(){g&&!y&&(y=!0,H({type:`autoslidepaused`}),clearTimeout(v),_&&_.setPlaying(!1))}function Vt(){g&&y&&(y=!1,H({type:`autoslideresumed`}),Rt())}function Ht({skipFragments:e=!1}={}){if(u.hasNavigatedHorizontally=!0,T.isActive())return T.prev();r.rtl?(O.isActive()||e||D.next()===!1)&&Z().left&&Y(o+1,r.navigationMode===`grid`?s:void 0):(O.isActive()||e||D.prev()===!1)&&Z().left&&Y(o-1,r.navigationMode===`grid`?s:void 0)}function Ut({skipFragments:e=!1}={}){if(u.hasNavigatedHorizontally=!0,T.isActive())return T.next();r.rtl?(O.isActive()||e||D.prev()===!1)&&Z().right&&Y(o-1,r.navigationMode===`grid`?s:void 0):(O.isActive()||e||D.next()===!1)&&Z().right&&Y(o+1,r.navigationMode===`grid`?s:void 0)}function Wt({skipFragments:e=!1}={}){if(T.isActive())return T.prev();(O.isActive()||e||D.prev()===!1)&&Z().up&&Y(o,s-1)}function Gt({skipFragments:e=!1}={}){if(u.hasNavigatedVertically=!0,T.isActive())return T.next();(O.isActive()||e||D.next()===!1)&&Z().down&&Y(o,s+1)}function Kt({skipFragments:e=!1}={}){if(T.isActive())return T.prev();if(e||D.prev()===!1)if(Z().up)Wt({skipFragments:e});else{let t;if(t=r.rtl?R(m.wrapper,K+`.future`).pop():R(m.wrapper,K+`.past`).pop(),t&&t.classList.contains(`stack`)){let e=t.querySelectorAll(`section`).length-1||void 0;Y(o-1,e)}else r.rtl?Ut({skipFragments:e}):Ht({skipFragments:e})}}function qt({skipFragments:e=!1}={}){if(u.hasNavigatedHorizontally=!0,u.hasNavigatedVertically=!0,T.isActive())return T.next();if(e||D.next()===!1){let t=Z();t.down&&t.right&&r.loop&&Ue()&&(t.down=!1),t.down?Gt({skipFragments:e}):r.rtl?Ht({skipFragments:e}):Ut({skipFragments:e})}}function Jt(e){r.autoSlideStoppable&&Bt()}function Yt(e){let t=e.data;if(typeof t==`string`&&t.charAt(0)===`{`&&t.charAt(t.length-1)===`}`&&(t=JSON.parse(t),t.method&&typeof n[t.method]==`function`))if(Pe.test(t.method)===!1){let e=n[t.method].apply(n,t.args);Ae(`callback`,{method:t.method,result:e})}else console.warn(`reveal.js: "`+t.method+`" is is blacklisted from the postMessage API`)}function Xt(e){h===`running`&&/section/gi.test(e.target.nodeName)&&(h=`idle`,H({type:`slidetransitionend`,data:{indexh:o,indexv:s,previousSlide:c,currentSlide:l}}))}function Zt(e){let t=V(e.target,`a[href^="#"]`);if(t){let r=t.getAttribute(`href`),i=A.getIndicesFromHash(r);i&&(n.slide(i.h,i.v,i.f),e.preventDefault())}}function Qt(e){W()}function $t(e){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur==`function`&&document.activeElement.blur(),document.body.focus())}function en(e){(document.fullscreenElement||document.webkitFullscreenElement)===m.wrapper&&(e.stopImmediatePropagation(),setTimeout(()=>{n.layout(),n.focus.focus()},1))}function tn(e){Ke()&&r.loop===!1?(Y(0,0),Vt()):y?Vt():Bt()}let nn={VERSION:mt,initialize:re,configure:_e,destroy:Se,sync:vt,syncSlide:yt,syncFragments:D.sync.bind(D),slide:Y,left:Ht,right:Ut,up:Wt,down:Gt,prev:Kt,next:qt,navigateLeft:Ht,navigateRight:Ut,navigateUp:Wt,navigateDown:Gt,navigatePrev:Kt,navigateNext:qt,navigateFragment:D.goto.bind(D),prevFragment:D.prev.bind(D),nextFragment:D.next.bind(D),on:we,off:De,addEventListener:we,removeEventListener:De,layout:W,shuffle:xt,availableRoutes:Z,availableFragments:D.availableRoutes.bind(D),toggleHelp:P.toggleHelp.bind(P),toggleOverview:O.toggle.bind(O),toggleScrollView:T.toggle.bind(T),togglePause:it,toggleAutoSlide:lt,toggleJumpToSlide:ct,isFirstSlide:Ge,isLastSlide:Ke,isLastVerticalSlide:Ue,isVerticalSlide:q,isVerticalStack:Ve,isPaused:J,isAutoSliding:ht,isSpeakerNotes:I.isSpeakerNotesWindow.bind(I),isOverview:O.isActive.bind(O),isFocused:F.isFocused.bind(F),isOverlayOpen:P.isOpen.bind(P),isScrollView:T.isActive.bind(T),isPrintView:E.isActive.bind(E),isReady:()=>a,loadSlide:b.load.bind(b),unloadSlide:b.unload.bind(b),startEmbeddedContent:()=>b.startEmbeddedContent(l),stopEmbeddedContent:()=>b.stopEmbeddedContent(l,{unloadIframes:!1}),previewIframe:P.previewIframe.bind(P),previewImage:P.previewImage.bind(P),previewVideo:P.previewVideo.bind(P),showPreview:P.previewIframe.bind(P),hidePreview:P.close.bind(P),addEventListeners:ve,removeEventListeners:B,dispatchEvent:H,getState:It,setState:Lt,getProgress:Tt,getIndices:Et,getSlidesAttributes:Mt,getSlidePastCount:Q,getTotalSlides:Nt,getSlide:Pt,getPreviousSlide:()=>c,getCurrentSlide:()=>l,getSlideBackground:Ft,getSlideNotes:I.getSlideNotes.bind(I),getSlides:Dt,getHorizontalSlides:$,getVerticalSlides:Ot,hasHorizontalSlides:At,hasVerticalSlides:jt,hasNavigatedHorizontally:()=>u.hasNavigatedHorizontally,hasNavigatedVertically:()=>u.hasNavigatedVertically,shouldAutoAnimateBetween:gt,addKeyBinding:k.addKeyBinding.bind(k),removeKeyBinding:k.removeKeyBinding.bind(k),triggerKey:k.triggerKey.bind(k),registerKeyboardShortcut:k.registerKeyboardShortcut.bind(k),getComputedSlideSize:Ie,setCurrentScrollPage:_t,removeHiddenSlides:se,getScale:()=>f,getConfig:()=>r,getQueryHash:Te,getSlidePath:A.getHash.bind(A),getRevealElement:()=>e,getSlidesElement:()=>m.slides,getViewportElement:()=>m.viewport,getBackgroundsElement:()=>w.element,registerPlugin:N.registerPlugin.bind(N),hasPlugin:N.hasPlugin.bind(N),getPlugin:N.getPlugin.bind(N),getPlugins:N.getRegisteredPlugins.bind(N)};return ye(n,ge(L({},nn),{announceStatus:ue,getStatusText:de,focus:F,scroll:T,progress:M,controls:j,location:A,overview:O,keyboard:k,fragments:D,backgrounds:w,slideContent:b,slideNumber:x,onUserInput:Jt,closeOverlay:P.close.bind(P),updateSlidesVisibility:X,layoutSlideContents:Ne,transformSlides:Oe,cueAutoSlide:Rt,cancelAutoSlide:zt})),nn}var Y=ht,gt=[];Y.initialize=e=>{let t=document.querySelector(`.reveal`);if(!(t instanceof HTMLElement))throw Error(`Unable to find presentation root (<div class="reveal">).`);return Object.assign(Y,new ht(t,e)),gt.map(e=>e(Y)),Y.initialize()},[`configure`,`on`,`off`,`addEventListener`,`removeEventListener`,`registerPlugin`].forEach(e=>{Y[e]=(...t)=>{gt.push(n=>n[e].call(null,...t))}}),Y.isReady=()=>!1,Y.VERSION=mt;var _t=()=>{let e,t={version:`latest`,delimiters:[{left:`$$`,right:`$$`,display:!0},{left:`$`,right:`$`,display:!1},{left:`\\(`,right:`\\)`,display:!1},{left:`\\[`,right:`\\]`,display:!0}],ignoredTags:[`script`,`noscript`,`style`,`textarea`,`pre`,`code`]},n=e=>{let t=document.createElement(`link`);t.rel=`stylesheet`,t.href=e,document.head.appendChild(t)},r=e=>new Promise((t,n)=>{let r=document.createElement(`script`);r.type=`text/javascript`,r.onload=t,r.onerror=n,r.src=e,document.head.append(r)});async function i(e){for(let t of e)await r(t)}return{id:`katex`,init:function(r){e=r;let a=e.getConfig().katex||{},o={...t,...a},{local:s,version:c,extensions:l,...u}=o,d=o.local||`https://cdn.jsdelivr.net/npm/katex`,f=o.local?``:`@`+o.version,p=d+f+`/dist/katex.min.css`,m=d+f+`/dist/katex.min.js`,h=d+f+`/dist/contrib/mhchem.min.js`,g=d+f+`/dist/contrib/auto-render.min.js`,_=[m];o.extensions&&o.extensions.includes(`mhchem`)&&_.push(h),_.push(g);let v=()=>{renderMathInElement(r.getSlidesElement(),u),e.layout()};n(p),i(_).then(()=>{e.isReady()?v():e.on(`ready`,v.bind(this))})}}},vt=()=>{let e,t={messageStyle:`none`,tex2jax:{inlineMath:[[`$`,`$`],[`\\(`,`\\)`]],skipTags:[`script`,`noscript`,`style`,`textarea`,`pre`,`code`]},skipStartupTypeset:!0};function n(e,t){let n=document.querySelector(`head`),r=document.createElement(`script`);r.type=`text/javascript`,r.src=e;let i=()=>{typeof t==`function`&&(t.call(),t=null)};r.onload=i,r.onreadystatechange=()=>{this.readyState===`loaded`&&i()},n.appendChild(r)}return{id:`mathjax2`,init:function(r){e=r;let i=e.getConfig().mathjax2||e.getConfig().math||{},a={...t,...i},o=a.mathjax||`https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js`,s=a.config||`TeX-AMS_HTML-full`,c=o+`?config=`+s;a.tex2jax={...t.tex2jax,...i.tex2jax},a.mathjax=a.config=null,n(c,function(){MathJax.Hub.Config(a),MathJax.Hub.Queue([`Typeset`,MathJax.Hub,e.getRevealElement()]),MathJax.Hub.Queue(e.layout),e.on(`slidechanged`,function(e){MathJax.Hub.Queue([`Typeset`,MathJax.Hub,e.currentSlide])})})}}},yt=Plugin=Object.assign(vt(),{KaTeX:_t,MathJax2:vt,MathJax3:()=>{let e,t={tex:{inlineMath:[[`$`,`$`],[`\\(`,`\\)`]]},options:{skipHtmlTags:[`script`,`noscript`,`style`,`textarea`,`pre`,`code`]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{e.layout()})}}};function n(e,t){let n=document.createElement(`script`);n.type=`text/javascript`,n.id=`MathJax-script`,n.src=e,n.async=!0,n.onload=()=>{typeof t==`function`&&(t.call(),t=null)},document.head.appendChild(n)}return{id:`mathjax3`,init:function(r){e=r;let i=e.getConfig().mathjax3||{},a={...t,...i};a.tex={...t.tex,...i.tex},a.options={...t.options,...i.options},a.startup={...t.startup,...i.startup};let o=a.mathjax||`https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`;a.mathjax=null,window.MathJax=a,n(o,function(){e.addEventListener(`slidechanged`,function(e){MathJax.typeset()})})}}},MathJax4:()=>{let e,t={tex:{inlineMath:[[`$`,`$`],[`\\(`,`\\)`]]},options:{skipHtmlTags:[`script`,`noscript`,`style`,`textarea`,`pre`,`code`]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{e.layout()})}}};function n(e,t){let n=document.createElement(`script`);n.type=`text/javascript`,n.id=`MathJax-script`,n.src=e,n.async=!0,n.onload=()=>{typeof t==`function`&&(t.call(),t=null)},document.head.appendChild(n)}return{id:`mathjax4`,init:function(r){e=r;let i=e.getConfig().mathjax4||{},a={...t,...i};a.tex={...t.tex,...i.tex},a.options={...t.options,...i.options},a.startup={...t.startup,...i.startup};let o=a.mathjax||`https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js`;a.mathjax=null,window.MathJax=a,n(o,function(){MathJax.startup.promise.then(()=>{MathJax.typeset(),e.addEventListener(`slidechanged`,function(e){MathJax.typeset()})})})}}}}),bt=Object.assign({"../slides/00-title.html":n,"../slides/01-part1/00-toc.html":i,"../slides/01-part1/01-k-groups.html":o,"../slides/01-part1/02-negative-k.html":c,"../slides/01-part1/03-k-theory-of-schemes.html":u,"../slides/01-part1/04-homotopy-invariance.html":f,"../slides/01-part1/05-k-regularity.html":m,"../slides/01-part1/06-k-regularity-criterion.html":g,"../slides/01-part1/07-regularity-criterion.html":v,"../slides/01-part1/08-idea-of-proof.html":y,"../slides/02-part2/00-toc.html":x,"../slides/02-part2/01-singularities.html":C,"../slides/02-part2/02-higher-sing-lci.html":T,"../slides/02-part2/04-beyond-lci.html":D,"../slides/03-part3/00-toc.html":k,"../slides/03-part3/01-main-result.html":j,"../slides/03-part3/02-main-result-higher.html":te,"../slides/03-part3/03-Proof.html":P,"../slides/04-part4/00-toc.html":ne,"../slides/04-part4/01-study-k-groups.html":re,"../slides/04-part4/02-further-questions.html":ae,"../slides/05-end/01-thank-you.html":se}),xt=document.querySelector(`.slides`);for(let e of Object.keys(bt).sort())xt.insertAdjacentHTML(`beforeend`,bt[e].default);window.sagecell&&window.sagecell.makeSagecell({inputLocation:`.sage-cell`,languages:[`sage`],evalButtonText:`Calculate`});var St=e=>`
  <div class="title-decor" aria-hidden="true">
    <svg viewBox="0 0 960 700">
      <defs>
        <linearGradient id="toc-node-stroke-${e}" gradientUnits="userSpaceOnUse" x1="0" y1="-343" x2="0" y2="343">
          <stop offset="0%" stop-color="#a51c30" stop-opacity="0" />
          <stop offset="32%" stop-color="#a51c30" stop-opacity="1" />
          <stop offset="68%" stop-color="#a51c30" stop-opacity="1" />
          <stop offset="100%" stop-color="#a51c30" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Drawing shifted +350px: the svg box hangs above the slide midline
           (see .title-decor) so the picture must be drawn one half-height
           lower to land on the slide. -->
      <g transform="translate(0 350)">

        <!-- The title page's node reflected about the vertical center
             line, landing bottom-right, clear of the outline text. The
             gradient references the path's local user space, so it
             mirrors along with the curve. -->
        <g transform="translate(960 0) scale(-1 1)">
          <g transform="translate(170 560) rotate(170)" opacity="0.07">
            <path
              fill="none"
              stroke="url(#toc-node-stroke-${e})"
              stroke-width="2.5"
              d="M 309.4 -342.9 C 265.6 -278.1, 225.0 -223.6, 187.5 -178.1 C 150.0 -132.6, 115.6 -96.0, 84.4 -66.8 C 53.1 -37.6, 25.0 -15.8, 0.0 0.0 C -25.0 15.8, -46.9 25.7, -65.6 31.2 C -84.4 36.6, -100.0 37.6, -112.5 35.6 C -125.0 33.6, -134.4 28.7, -140.6 22.3 C -146.9 15.8, -150.0 7.9, -150.0 0.0 C -150.0 -7.9, -146.9 -15.8, -140.6 -22.3 C -134.4 -28.7, -125.0 -33.6, -112.5 -35.6 C -100.0 -37.6, -84.4 -36.6, -65.6 -31.2 C -46.9 -25.7, -25.0 -15.8, 0.0 0.0 C 25.0 15.8, 53.1 37.6, 84.4 66.8 C 115.6 96.0, 150.0 132.6, 187.5 178.1 C 225.0 223.6, 265.6 278.1, 309.4 342.9" />
          </g>
          <circle cx="170" cy="560" r="3.5" fill="#a51c30" opacity="0.25" />
        </g>

      </g>
    </svg>
  </div>`;document.querySelectorAll(`section.toc-slide`).forEach((e,t)=>{e.insertAdjacentHTML(`afterbegin`,St(t))}),Y.initialize({hash:!0,slideNumber:`c/t`,progress:!0,controls:!0,controlsTutorial:!1,transition:`slide`,transitionSpeed:`default`,width:960,height:700,margin:.08,center:!0,plugins:[yt.KaTeX]});var Ct=!1,wt=!1,X=!1,Z=!1;function Q(){let e=document.getElementById(`m-db-input`),t=document.getElementById(`t-reg-input`);if(!e||!t)return;let n=parseInt(e.value),r=parseInt(t.value);for(let e=1;e<=6;e++)for(let t=0;t<=6;t++){let i=document.getElementById(`cell-${t}-${e}`);if(!i)continue;let a=t<=n;Z&&t===n+1&&e===5-n&&(a=!0);let o=e-t>=-r,s=Ct&&t+e>6,c=wt&&t+e<5,l=X&&t+e<4,u=i.querySelector(`.math-content`),d=i.querySelector(`.zero-content`);s||c||l?(i.style.backgroundColor=`rgba(100, 100, 100, 0.5)`,u&&(u.style.display=`none`),d&&(d.style.display=`inline`)):a&&o?(i.style.backgroundColor=`rgba(150, 50, 150, 0.5)`,u&&(u.style.display=`none`),d&&(d.style.display=`inline`)):a?(i.style.backgroundColor=`rgba(50, 150, 250, 0.5)`,u&&(u.style.display=`none`),d&&(d.style.display=`inline`)):o?(i.style.backgroundColor=`rgba(250, 150, 50, 0.5)`,u&&(u.style.display=`none`),d&&(d.style.display=`inline`)):(i.style.backgroundColor=`transparent`,u&&(u.style.display=`inline`),d&&(d.style.display=`none`))}}document.addEventListener(`input`,function(e){e.target&&(e.target.id===`m-db-input`||e.target.id===`t-reg-input`)&&Q()}),document.addEventListener(`click`,function(e){e.target&&e.target.id===`steenbrink-btn`?(Ct=!Ct,e.target.style.backgroundColor=Ct?`#ddd`:``,Q()):e.target&&e.target.id===`lci-isolated-btn`?(wt=!wt,e.target.style.backgroundColor=wt?`#ddd`:``,Q()):e.target&&e.target.id===`lci-dim1-btn`?(X=!X,e.target.style.backgroundColor=X?`#ddd`:``,Q()):e.target&&e.target.id===`extra-vanishing-btn`&&(Z=!Z,e.target.style.backgroundColor=Z?`#ddd`:``,Q())}),Y.on(`ready`,e=>{setTimeout(()=>{let e=document.getElementById(`t-reg-input`);e&&e.dispatchEvent(new Event(`input`,{bubbles:!0}))},500)});