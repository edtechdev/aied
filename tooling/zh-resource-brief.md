# 资源页（resource）翻译补充规则

本补充规则适用于 `content/en/resources/*.md` → `content/zh/resources/*.md`。
概念页规则（`zh-batch-brief.md`）同样适用，除非下面另有说明。

## 1. 资源页与概念页的差异

- **章节更少**：多数资源页只有 2–4 个 `##` 章节，常见为
  `What you can do with it` / `Who it is for` / `Notes and caveats` / `Connected Concepts`。
  章节骨架必须**逐字照抄**——章节标题照样翻译，但顺序与数量不得改动。
- **没有 `Connected Articles` 列表**：资源页以 `## 关联概念` 一节结尾。
- **正文更短**（中位数约 315 个英文单词），因此一页一次 `write_file` 写完通常不会超出输出上限，
  但仍要遵守"写完即停"，不要回头润色。

## 2. 必须逐字保留的字段

- `url`、`author_url`：原样保留，不得翻译或改写。
- `title`：资源名称的正式写法（产品名、书名、项目名）逐字保留；
  若英文标题含描述性文字，则翻译描述部分。
- `resource_type`、`access`、`level`、`audience`、`confidence`、`last_verified`：
  facet 取值逐字保留（枚举值不翻译）。
- `summary`：**翻译**为中文，但保留其中的专有名词与链接目标。

## 3. `ai_assist` 模型字段

本批次一律写：

```yaml
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
```

（现有的 `content/zh/resources/playlab.md` 用的是 `deepseek/deepseek-v4.1-flash`，
那是上一个批次真实使用的模型，保留不动；不要把它改成别的值。）

## 4. 翻译标注四行

在 `last_verified` 等正文 frontmatter 之后、`ai_assist` 之前插入：

```yaml
translation_of: resources/<slug>
source_updated: "<英文页 updated 的值>"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
```

`reviewed_by`（若英文页有）**删除**。

## 5. 输出格式

每个子任务结束时只输出一行 JSON（不输出散文）：

```json
{"pages":[{"slug":"<slug>","updated":"<你实际写入的 updated 值>"}]}
```
