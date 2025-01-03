# Long Teng Theme Configuration Guide

## Introduction

**Lóng Téng**, meaning "Soaring Dragon," is a theme symbolizing growth, innovation, and strength.  
It is designed for creating striking product launch pages that elegantly and clearly present your product.  
From highlighting product features to telling the product story, this theme is tailored for modern and forward-thinking creators.

## Example Configuration File

```yaml
---
friday-plugin: enabled
site: '1'
theme: github.com/mdfriday/theme-long-teng
content: MDFriday/theme-long-teng/content
---
```

## Configuration Item Descriptions

### 1. **friday-plugin**
- **Description**: Indicates the enabled status of the MDFriday plugin.
- **Default Value**: `enabled`
- **Explanation**: Keep this set to `enabled` without modification. This field serves as the marker for the MDFriday plugin, ensuring the plugin works correctly.

### 2. **site**
- **Description**: Site ID.
- **Default Value**: `'47'` (automatically generated by the plugin)
- **Explanation**: This field is automatically generated by the MDFriday plugin, representing your site ID. It is recommended not to change it.

### 3. **theme**
- **Description**: GitHub address of the theme.
- **Default Value**: `github.com/mdfriday/theme-long-teng`
- **Explanation**: This specifies the GitHub address of the Hugo theme used. You can change it to another theme address if needed. If you are using the Long Teng theme, leave this value unchanged.

### 4. **content**
- **Description**: Path to the content folder.
- **Default Value**: `MDFriday/theme-long-teng/content`
- **Explanation**: This defines the location of the theme's content folder. Initially, the `content` field is set to `empty`, and the plugin will automatically update it to a relative path after the user downloads the sample files.

## Usage Recommendations
- If you want to use a different Hugo theme, simply enter the new theme address in the `theme` field.
- The `content` directory will be automatically updated after downloading the sample files, and no manual changes are needed. However, if you want to point to a different file location, remember to update this path.

---

By properly configuring the fields above, you will be able to successfully enable the Long Teng theme and showcase content.  
If you have any questions or need further assistance, please visit the MDFriday website's theme introduction page: [theme-long-teng](https://themes.mdfriday.com/theme-long-teng).