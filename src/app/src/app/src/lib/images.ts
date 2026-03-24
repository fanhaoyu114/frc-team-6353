/**
 * 图片配置文件
 * 把你的图床链接填进去，图片就会自动显示
 */

export const images = {
  // 首页团队合照
  teamGroupPhoto: "",

  // Terminal A: 校园活动
  campus: {
    activity: "",
    openDay: "",
    carnival: "",
  },

  // Terminal B: 全球连接
  global: {
    mentorship: "",
    scrimmage: "",
    seminar: "",
  },

  // Terminal C: 社会 outreach
  outreach: {
    kindergarten: "",
    industry: "",
  },

  // 可持续发展
  sustainability: {
    leadership: "",
    partnership: "",
  },

  // 17位队员头像（按顺序）
  members: [
    "", // 1. Fan Haoyu
    "", // 2. Jiang Shan
    "", // 3. Zhang Yise
    "", // 4. Shi Jincheng (Captain)
    "", // 5. Jin Yinuo
    "", // 6. Wu Yueyang
    "", // 7. Huang Xingning
    "", // 8. Bian Zheyu
    "", // 9. Hu Gaoxuan
    "", // 10. Zhou Xingyu
    "", // 11. Yang Jiahe
    "", // 12. Xu Chuqiao
    "", // 13. Zou Chucheng
    "", // 14. Xia Xikai
    "", // 15. Jiang Siyu
    "", // 16. Wu Hao
    "", // 17. Cui Tianchang
  ],

  // 页脚
  footer: {
    qrCode: "",
    badge1: "",
    badge2: "",
  },
}

export function hasImage(url: string | undefined): url is string {
  return typeof url === "string" && url.length > 0
}
