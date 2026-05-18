$(python3 - <<'PY'
from pathlib import Path
import re

p=Path("src/components/Projects.tsx")
txt=p.read_text()

# Make the watermark itself subtle and non-blocking
txt=re.sub(
r'className="([^"]*MIKEOPS[^"]*)"',
lambda m: m.group(0)
.replace("bg-white/20","bg-white/[0.04]")
.replace("bg-white/10","bg-white/[0.04]")
.replace("backdrop-blur-md","backdrop-blur-[1px]")
.replace("backdrop-blur-lg","backdrop-blur-[1px]")
.replace("opacity-50","opacity-[0.08]")
.replace("opacity-40","opacity-[0.08]")
.replace("opacity-30","opacity-[0.08]")
.replace("text-slate-900","text-white/10")
.replace("text-black","text-white/10"),
txt
)

# Safety additions
txt=txt.replace(
'rotate-[-12deg]',
'rotate-[-12deg] pointer-events-none select-none'
)

print(txt)
PY
)
