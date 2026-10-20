from pathlib import Path
import importlib.util
source=Path.home()/'.codex/plugins/cache/openai-primary-runtime/documents/26.630.12135/skills/documents/render_docx.py'
spec=importlib.util.spec_from_file_location('render_docx',source)
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
run=m._run_cmd
def windows_uri(cmd,**kwargs):
 cmd=[('-env:UserInstallation='+Path(v.split('file://',1)[1]).as_uri()) if v.startswith('-env:UserInstallation=file://') else v for v in cmd]
 return run(cmd,**kwargs)
m._run_cmd=windows_uri
m.main()
