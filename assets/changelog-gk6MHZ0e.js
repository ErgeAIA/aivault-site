import{u as g,j as n}from"./lib-B17Hd8AR.js";import{D as u,g as d,m as f}from"./DocsLayout-DhGl0RRb.js";import{C as x}from"./Callout-xewnm8H3.js";const m=`# Changelog\r
\r
本项目的所有重要变更都记录在此文件。格式遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本遵循 [语义化版本](https://semver.org/lang/zh-CN/)。\r
\r
## [Unreleased]\r
\r
## [v0.2.6] - 2026-09-19\r
\r
### 修复\r
\r
- 修复引擎「启动前资源释放」弹窗中「仅启动，不释放」点击后引擎不启动的问题，现点击后不释放资源、直接开始启动。\r
- 修复「启动前资源释放」弹窗点「确认释放」后应用窗口可能卡死白屏的问题：不再误关应用自身的界面进程，扫描与释放的重负载操作移出界面线程，窗口不再卡顿无响应。\r
\r
## [v0.2.5] - 2026-09-17\r
\r
### 新增\r
\r
- **启动配置一键复制 OpenAI 兼容 API 地址**：「新建 / 编辑配置」的「常用 → 基础 → 端口」输入框右侧新增复制徽章，点击即复制 \`http://127.0.0.1:{端口}/v1\`，方便粘贴到其它客户端或 Agent 工具。\r
- **在线模型文件行复制下载地址**：模型管理「下载」页展开仓库后的文件名旁新增复制徽章，点击复制该文件的直链地址（悬停仍可预览完整链接）。\r
- **启动前资源释放（Windows）**：引擎页「快速启动」标题行新增「释放资源」入口，弹窗可关闭无关应用并压缩工作集，为本地模型腾出内存。列表按进程名聚合（同名子进程合并为一行，显示合计占用与进程数），支持全选/全不选；有 N 卡时展示各候选显存占用；「同时压缩工作集」带悬浮说明。默认开启「启动前每次都提示」——点「启动」会先走同一弹窗，可选「释放并启动」或「仅启动，不释放」。关闭进程前会做 PID 复验，系统关键进程与 llama-server 永不列入。\r
- **配置参数 hover 显示 CLI 命令行参数**：新建/编辑配置时，参数说明首行以等宽字体展示对应命令行参数（如 \`--host\`）；参数搜索也可按 flag 命中。\r
\r
### 修复\r
\r
- 在线模型搜索结果文件名不再「点击即下载」，下载只通过行尾「下载」按钮触发，避免浏览列表时误触开始下载大模型。\r
\r
### 变更\r
\r
- 前端包管理器声明升级为 pnpm 12.4.2，并同步 \`pnpm-lock.yaml\`（开发者请使用对应版本安装依赖）。\r
\r
## [v0.2.4] - 2026-09-17\r
\r
### 新增\r
\r
- **本地模型哈希索引与下载防重**：模型管理新增完整 SHA-256 扫描；本地模型改名后仍可与 Hugging Face / ModelScope 的远端哈希比对，命中时直接阻止重复下载并提示本地路径。已下载模型行新增哈希操作，可直接复制缓存哈希或计算保存。\r
- **在线模型搜索分页加载更多**：下载 Tab 的搜索结果底部新增「加载更多」，每次主动请求下一页 50 条并追加展示，避免一次拉取全量导致接口限流；切换关键词 / 来源 / 作者时重置分页。\r
- **启动配置导出为 Markdown 启动说明书**：「快速启动」列表每行新增「导出」按钮，面板头部新增「导出全部」；导出的 MD 含模型名、可直接复制执行的启动命令（与「启动」实际下发完全一致，\`api_key\` 不进命令行），并附关键参数说明表。\r
\r
### 修复\r
\r
- 修复移除模型目录后「新建配置」的模型下拉仍列出已删除目录里模型文件的问题；此时改为明确提示尚未添加模型目录。\r
- 修复「Llama.cpp 引擎」页在尚未创建任何启动配置时没有新建入口的问题（原提示为「点此新建」但界面上没有按钮），现空状态直接提供「新建配置」按钮。\r
- 「Llama.cpp 引擎」页「快速启动」空态新增「添加目录」按钮，复用模型管理页的同一添加目录动作，无需跳转模型管理页。\r
- 修复关于页「个人网站」入口指向错误的站点根路径，现跳转到实际部署的官网地址；作者相关外链同时统一走应用内的打开与失败提示流程。\r
- 修复在线模型下载对合法 GGUF 的错误校验与已有完整文件误报问题；下载完成后会按远端 SHA-256 校验，并在模型行提供标准化的标注、打开目录、复制路径与哈希操作。\r
\r
## [v0.2.3] - 2026-09-15\r
\r
### 新增\r
\r
- **本地引擎配置参数搜索**：「新建 / 编辑配置」窗口顶部新增参数搜索框，可在近 200 个参数中按名称、命令行参数名或下拉选项值查找（如输入 mtp 可定位「推测类型」的 draft-mtp 选项）；支持「模糊 / 精确」两种匹配模式，结果下拉列出所属分组，点击后自动切到对应页签、滚动定位到该参数并短暂高亮。搜索只匹配参数本身，不含参数当前填写的数值。\r
- **关于页新增个人网站入口**：设置 → 关于 中的作者联系方式新增「个人网站」徽章，点击在浏览器打开作者主页。\r
\r
### 修复\r
\r
- 修复技能更新可能未真正获取最新版本的问题：同一仓库短时间内多次安装或更新时，可能复用过期的下载缓存导致更新后仍是旧内容。\r
- 修复左侧导航栏的技能数量与技能管理页显示的数量不一致（导航侧曾把已卸载的技能一并计入）。\r
- 修复各资产分类导航计数在增删后偶发不同步的问题，现已统一由一处取数并在切页时自动校准。\r
- 修复本地模型标注重启后无法读取、Vault 迁移功能不可用的问题。\r
- 修复「按标签筛选」与「只看收藏」同时启用时列表查询报错的问题（模型/提示词/MCP/平台/工作流）。\r
- 优化备份/恢复、资产导入导出、技能分享与批量添加仓库等操作期间的界面响应（不再阻塞操作）。\r
\r
## [v0.2.2] - 2026-09-12\r
\r
### 新增\r
\r
- **技能详情页作者信息**：显示技能作者（读取技能文件自述的作者，未标注时显示来源仓库作者），本地导入技能标注了作者同样可见。\r
- **技能详情页上游更新时间**：显示技能在上游的最近更新日期（安装、更新及检查更新发现新版本时自动记录；尚无记录时显示"—"）。\r
- **技能列表排序**：列表顶部新增排序切换（名称 A-Z / 最近安装 / 最近更新），「最近更新」按技能内容在上游的更新时间排序，本地技能排在末尾。\r
- **技能搜索增强**：输入名称各单词的首字母即可定位技能（如 nb → news-briefing、bci → baoyu-cover-image，支持跳词）；有完全匹配时只显示完全匹配，不再被描述里的相近字样淹没。\r
\r
### 修复\r
\r
- 修复升级版本后首次启动可能闪退的问题（数据库升级前的自动备份环节缺陷）。\r
- 修复部分仓库的技能无法检测更新（仓库默认分支不是 main 时检查请求始终失败），现与安装行为一致自动尝试常见分支。\r
- 详情页时间统一为「年-月-日」绝对日期（悬停可查看完整时间）。\r
\r
## [v0.2.1] - 2026-09-10\r
\r
### 新增\r
\r
- **左上角菜单官方文档入口**：接通官网使用文档（快速上手/技能管理/本地引擎/设置与数据安全等 13 页）；快捷入口补齐本地引擎组（引擎/模型管理/对话，与右键菜单一致）。\r
\r
### 修复\r
\r
- **内置资产更新双源回退**：更新源 GitHub 不通时自动切换 Gitee 镜像（对齐软件更新的双源机制），国内网络环境也可正常更新内置资产。\r
- mmproj 视觉投影文件不再可作为主模型新建配置——模型管理页置灰 + 悬停说明。\r
- 悬停提示主题化补漏（本地引擎「AI 分析」「自动滚动」、在线平台「打开平台」徽章）+ 默认宽度放宽至 384px，长说明换行更少。\r
- 引擎指南「AI 分析」描述修正——复制提示词与日志发任意 AI 对话窗口即可分析。\r
\r
## [v0.2.0] - 2026-09-06\r
\r
### 新增\r
\r
- **性能优化批**（检查更新/检测更新页面卡顿根修）：\r
  - 12 个阻塞命令移出主线程（运行时检测更新、硬件检测、内置资产检查、GitHub 凭证测试、端点测速、在线模型搜索、GGUF 头解析）——原同步命令在 UI 事件循环线程执行，网络/子进程等待期间整个窗口冻结；\r
  - 子进程统一超时（PowerShell WMI/nvidia-smi/llama-server --version/git ls-remote 10-30s）——服务卡死或网络挂起不再无限等待；\r
  - 硬件检测失败缓存 60s 后可重试（原先一次瞬时失败进程内永久缺失）；\r
  - 数据库层：数据种子初始化进程内一次化 + WAL 模式 + 写等待超时（原每命令全量初始化且读写互斥）。\r
\r
### 新增（续）\r
\r
- **模型元数据与视觉投影选择**（模型下载体验）：\r
  - 远程 GGUF 元数据：下载前即可查看模型真实架构/上下文长度/参数量（HTTP Range 仅读文件头 64KB，结果本地缓存、离线可读）；\r
  - 多视觉投影（mmproj）仓库：下载主模型时弹窗选择投影文件，纯文本用途可跳过。\r
\r
### 修复\r
\r
- 引擎启动时环境报告构建移出数据库锁临界区（首次硬件探测 2-4s 持锁导致状态轮询连锁阻塞）；\r
- 运行时检测更新主站回退按最新 10 条截断（原全部条目串行请求，最坏数分钟）。\r
\r
### 新增\r
\r
- **模型下载作者筛选支持自定义**：内置常用 GGUF 仓库作者之外，可自行添加并管理作者（持久化保存），按心仪的发布者精准筛选模型。\r
- **「Agent 启停」下拉支持搜索**：雷达页 Agent 启停下拉顶部新增搜索框，内置 Agent 按名称/类型快速定位。\r
- **技能包（Skill Pack）**：按用途（编程 / 内容创作等）把技能组织成命名集合，Agent 一键应用——\r
  - 雷达 Agent 卡片左下角显示当前技能包（「全选」或包名），点击打开技能包面板：单选切换（包内技能同步、包外自动退订）+ 逐技能微调 + 「重置为包基准」；\r
  - 技能管理页新增「技能包」管理入口：包的新建 / 重命名 / 删除与成员编辑，保存后已应用 Agent 自动同步（入包自动开启、出包自动退订）；\r
  - 已应用技能包的 Agent：包内新技能自动同步，包外新技能不再自动同步；删除包时受影响 Agent 自动恢复全选；\r
  - 「另存为新包」：把当前启用的技能集合一键保存为新技能包；\r
- **在线模型搜索与下载**：\r
  - 模型页三 Tab（已下载 / 推荐 / 下载）：多源搜索 HuggingFace / ModelScope（搜索 API 官方直连、下载走 hf-mirror 国内加速）、作者筛选下拉（已知 GGUF 大仓）、GGUF 文件列表（子目录递归、分卷合并展示、量化标签、imatrix 排除）、结果链接可点；\r
  - 下载引擎：GGUF 头校验、断点续传（Range 续传 + 手动重定向保 Range）、失败指数退避（有进展自动清零）、全局单任务、实时进度（百分比 / 已下载 / 总量 / 速度）、暂停继续、下载中可中止（.part 保留续传）；\r
  - 「已下载」Tab 切回自动重扫，下载完成免手动刷新；mmproj 视觉投影文件随模型批量下载；\r
  - 仓库与文件更新时间：搜索结果显示仓库更新日期，展开后每个文件都带更新日期；\r
- **通用模型文件下载**：不再限定 GGUF——仓库文件全量展示（safetensors 等其它格式带格式标签，量化标签仅标 GGUF），任意文件均可应用内下载（复用断点续传/暂停/取消）。\r
- **GitHub 仓库标签**（发现页 / 技能管理）：\r
  - 发现页 GitHub 仓库列表接入标签体系：标签筛选行（按标签过滤仓库）、仓库行标签徽章（边框 + 圆点样式）、展开区就地打标签（切换即保存，防连点竞态）；\r
  - 设置页「标签管理」新增「GitHub 仓库」分类，可新建 / 删除标签；标签名原样保存（不加类型前缀）；\r
  - Vault 资产导出 / 导入附带仓库标签关联（含回归测试）。\r
- **技能搜索空态跳转**：技能管理页搜索无结果时提供「去 SKILLS.SH 搜索」，携带关键词跳转发现页 skills.sh 并自动搜索。\r
\r
- **本地引擎（llama.cpp 集成）M0 全量**：\r
  - **引擎页**：档案列表 + 启动/停止/打开对话双徽章；分层档案切换（空闲静默切换、生成中确认后切换）；硬件与运行卡（硬件概览/运行状态/性能行[GPU offload 层数/显存估算/生成速度，日志解析]/**可用后端检测**（CPU/CUDA/Vulkan/SYCL/HIP 五标签，WMI+驱动判定）/**模型信息行**（大小/量化/用户标注标签）/**全 CPU 运行警告**）；**控制台输出**（常驻块、自动滚动开关、AI 分析[复制提示词+日志]、复制全部/清空/导出 .log）；\r
  - **运行时管理**：多版本共存、GitHub releases 拉取（API→主站 fallback，24h TTL+ETag+轻量检测）、**按 tag 查找历史版本**（含发布日期）、下载管线（sha256 校验+.tmp 原子落位+进度事件+孤儿清扫）、自定义二进制指认、版本删除保护；\r
  - **模型页**：多目录扫描（深度 2/量化识别/500 截断/可达性）、GGUF 卡片（对齐资产页尺寸）、**模型标注系统**（标签+备注，settings 零 schema）、**档案 chips**、推荐模型区块（HF/ModelScope 徽章）、视觉投影器下拉（mmproj 过滤）；\r
  - **对话页**：内嵌 llama-server WebUI 直接对话（CSP frame-src 仅放行 127.0.0.1）+ 自定义 URL 槽位；\r
  - **档案系统**：\`llama_profiles\` 表（V32ToV33，26 列全参数；V33ToV34 补 kv_unified/fit；V34ToV35 前后端批处理安全校验）+ **档案预设**（内置 5 场景对齐 catapult + 用户自定义）+ api_key 环境变量传递（不进命令行）+ 默认占位 \`sk-no-key-required\`；\r
  - 导航新增「本地引擎」分组（引擎/模型/对话）+ TitleBar 全局运行指示（呼吸绿点+模型名）；\r
  - 启动可靠性：端口占用 connect 预检、启动失败三分错误面、活性看门狗（60s 无日志+无 /health → kill；15min 软上限转「仍在加载」）、退出清理、孤儿残留进程终止入口。\r
\r
### 变更\r
\r
- 本地引擎档位预设重做：九档 GPU 分层预设、新配置置顶、启动配置弹窗改为顶部对齐（高内容弹窗不再垂直居中被推离视口）。\r
- AIGC 分组「模型」显示名改「模型导航」（key 不变）。\r
\r
### 修复\r
\r
- skills.sh 来源的技能点击「更新」报「未找到 Skill」——检查与更新的来源口径分裂，skills.sh 技能现可正常更新（含「全部更新」）。\r
- 本地引擎纯 CPU（-ngl 0）档位被误判为「GPU 加速」。\r
- GitHub 仓库列表展开再收起时结尾停顿（收起动画残留空隙后才消失）。\r
- 从其它页面切回发现页闪「加载中」——仓库列表 / 扫描缓存 / 标签列表改为缓存优先（秒显旧数据、后台静默刷新）；仓库展开区技能列表样式与技能管理列表视图对齐（含 hover 动效）。\r
\r
## [v0.1.5] - 2026-08-27\r
\r
### 新增\r
\r
- **内置资产 per-type 独立更新体系**（与软件更新、技能更新并行的第三套更新机制）：\r
  - 内置资产按类型独立版本（\`YYYYMMDD[.N]\` 日期版本），7 类：mcps / prompts / models / platforms / skill_repos / user_rules / comfyui_workflows；\r
  - 各资产页页头新增「内置」徽章（hover 显示版本号，紧凑胶囊；位于所有按钮最右侧）：启动每日检测一次（拉远程 index 比版本），有待更新时高亮，点击确认后增量应用（已编辑条目不覆盖、已删除的不复活、恢复可复活）；\r
  - 设置页「内置资产」保留全量恢复入口；\r
  - **API 供应商不参与内置更新体系**（安全：杜绝配置经公开分发源扩散），仅空表种子一张内置示例卡；\r
  - ComfyUI 工作流纳入内置（V31ToV32 给工作流表补内置三件套列 + 唯一索引）；\r
  - 维护工具链：\`scripts/publish-builtin.mjs\`、\`scripts/export-builtin.mjs\`；维护手册 \`docs/builtin-maintenance.md\`；远程分发双源（GitHub raw + Gitee 镜像）。\r
- **完整快捷键体系**：\`Ctrl+1..9 / Ctrl+0\` 切页、\`Ctrl+,\` 设置、\`Ctrl+F\` 搜索聚焦、\`Ctrl+N\` 新建当前页资产、\`Ctrl+S\` 保存编辑、\`Ctrl+K\` 快捷键速览、\`F5\` 检查技能更新、\`F1\` 反馈；顶栏键盘徽章。\r
- 反馈问题改为弹窗四联系方式（邮件 / GitHub / B站 / 微信公众号 hover 二维码）；右键菜单新增「反馈问题」。\r
\r
### 变更\r
\r
- Agent 的「内置」标识改称「预置」徽章；资产语境仍称「内置」。\r
- API 供应商模型元数据选项（上下文长度 / 最大输出长度 / 模态 / Response API）统一为共享常量，编辑页与详情弹窗同源一致（含 131K、排序对齐）。\r
- 雷达页添加项目级技能时，若项目缺 Agent 配置目录（如 \`.dsh/skills\`）静默创建并纳入管理，不再报错。\r
- ComfyUI「获取最新免费工作流」改为品牌色滑动填充动画按钮；工作流卡片「在线运行」hover 不再暴露链接。\r
\r
### 修复\r
\r
- explorer 打开项目/技能目录回退「文档」——目录改为直接打开（不加 /select）、去 \`\\\\?\\\` 前缀（含空格路径实测有效）。\r
- 添加项目级技能的报错 toast 中英双语 → 该服务错误文案全部单语化。\r
- 反馈弹窗二维码浮层 hover 不显示（AnimatePresence × portal）；内置徽章「manifest 解析失败 / 无法检查」系列。\r
- API 供应商请求地址行复制按钮 hover 文案改「复制接口地址」（原误用复制 Key）。\r
- 内置徽章 hover 版本提示改主题化 Tooltip（原生 title 不跟随主题），宽度放宽到 max-w-sm。\r
\r
## [v0.1.4] - 2026-08-26\r
\r
### 新增\r
\r
- **宪法部署**：部署到 Agent 根指令文件（claude-code → \`~/.claude/CLAUDE.md\`、gemini-cli → \`~/.gemini/GEMINI.md\`、trae-cn / codex → AGENTS.md，其余默认），仅软链、占用备份 \`.bak\`、per-agent 互斥、三态联动（启用/停用/恢复）、未启用不可部署。\r
- **备份恢复幂等化**：恢复按 \`builtin_key\` 幂等（已存在不覆盖）、恢复成功删除备份记录（二次恢复不再误导报错）、恢复后规则页即时刷新。\r
- **内置资产提取**：用户新增 AIGC 资产收编入内置清单（v2，邀请码 / 联盟链接原样保留）。\r
- ComfyUI 详情页「在线运行」按钮、模型多来源 Select portal 修复与来源标注、备份四 tab 顺序。\r
\r
### 变更\r
\r
- 主题名中文化（光环 / 德古拉 / 水母）；主题三件 CSS 语义 token 对齐。\r
\r
## [v0.1.3] - 2026-08-23\r
\r
### 新增\r
\r
- **应用自动更新 + 双源分发**（tauri-plugin-updater）：启动静默检查一次、NavRail 更新徽章、关于页更新入口；GitHub + Gitee 双清单与双 Releases（GitHub 断连自动回退 Gitee）。发布分发仓库 \`updates-dist\`（多项目共用，内置资产清单同仓分发）。\r
- **JellyFish 主题**（ThemeVault #055）——第 10 套主题，按主题 accent 品牌色适配。\r
\r
## [v0.1.1] - 2026-08-23\r
\r
### 新增\r
\r
- 首次正式发版（Windows x64 / macOS x86_64 + aarch64，CI 签名构建）；私有仓库支持（gh 优先 + PAT 兜底）；从仓库 URL 安装单个技能；打包前全量审查（i18n 死 key 清理 / 依赖升级 / 供应链审计）。\r
`;function h(t,s){const r=[];let e=null,a=null;for(const i of t.split(/\r?\n/)){const l=i.match(/^## \[(.+?)\](?:\s*-\s*(\d{4}-\d{2}-\d{2}))?\s*$/);if(l){if(l[1]==="未发布"||l[1]==="Unreleased"){e=null;continue}e={version:l[1],date:l[2]??"",sections:[]},r.push(e),a=null;continue}const o=i.match(/^(\s*)- (.+)/);if(o&&e){a||(a={title:s,items:[]},e.sections.push(a)),a.items.push({text:o[2],sub:o[1].length>=2});continue}const c=i.match(/^###\s+(.+)/);c&&e&&(a={title:c[1].trim(),items:[]},e.sections.push(a))}return r}function G(t){return t.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((r,e)=>r.startsWith("**")&&r.endsWith("**")?n.jsx("strong",{children:r.slice(2,-2)},e):r.startsWith("`")&&r.endsWith("`")?n.jsx("code",{className:"rounded bg-soft px-1 py-px font-mono text-[0.85em]",children:r.slice(1,-1)},e):r)}function p({releases:t}){return n.jsx(n.Fragment,{children:t.map(s=>n.jsxs("section",{className:"mt-10 border-t border-line pt-6 first:mt-8 first:border-t-0 first:pt-0",children:[n.jsxs("h2",{className:"flex flex-wrap items-baseline gap-3",children:[n.jsx("span",{className:"font-mono text-brand",children:s.version}),n.jsx("span",{className:"text-sm font-normal text-fg-muted",children:s.date})]}),s.sections.map(r=>n.jsxs("div",{className:"mt-4",children:[n.jsx("h3",{children:r.title}),n.jsx("ul",{children:r.items.map((e,a)=>n.jsx("li",{className:e.sub?"ml-5 list-[circle]":"",children:G(e.text)},a))})]},r.title))]},s.version))})}function b({locale:t}){if(t==="en"){const r=h(m,"Changes");return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["Always install from the"," ",n.jsx("a",{href:"https://github.com/ErgeAIA/updates-dist/releases/latest",target:"_blank",rel:"noreferrer",children:"latest release page"}),". The app also checks for updates automatically on startup."]}),n.jsx(x,{variant:"info",title:"Release notes are written in Chinese",children:"Entries below are parsed from the project changelog and kept in the original Chinese. UI chrome on this page is English."}),n.jsx(p,{releases:r})]})}const s=h(m,"变更");return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["安装包始终以"," ",n.jsx("a",{href:"https://github.com/ErgeAIA/updates-dist/releases/latest",target:"_blank",rel:"noreferrer",children:"最新发布页"})," ","为准；应用内会在启动时自动检查更新。"]}),n.jsx(p,{releases:s})]})}function A(){const t=g();return n.jsx(u,{page:d("changelog",t),toc:[],children:n.jsx(b,{locale:t})})}f(n.jsx(A,{}));
