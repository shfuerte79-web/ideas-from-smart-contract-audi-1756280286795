import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ideas from: Smart Contract Auditor AI",
  description: "```json
[
  {
    \"title\": \"AuditGPT\",
    \"description\": \"أداة تعتمد على الذكاء الاصطناعي لتحليل العقود الذكية وتقديم تقارير شاملة حول نقاط الضعف والمخاطر المحتملة.\",
    \"mvp_plan\": \"استخدام مكتبة GitHub لتحليل العقود الذكية، وتطوير واجهة مستخدم بسيطة تسمح للمستخدمين بتحميل عقودهم والحصول على تقرير فوري.\"
  },
  {
    \"title\": \"Smart Contract Compliance Checker\",
    \"description\": \"أداة تتحقق من توافق العقود الذكية مع المعايير القانونية والتنظيمية المحددة.\",
    \"mvp_plan\": \"إنشاء واجهة بسيطة حيث يمكن للمستخدمين إدخال العقود الذكية، واستخدام خوارزميات تحليل النصوص للتحقق من التوافق مع المعايير القانونية المعروفة.\"
  },
  {
    \"title\": \"Real-time Vulnerability Alerts\",
    \"description\": \"نظام تنبيهات فورية ينبه المطورين عند اكتشاف ثغرات جديدة في العقود الذكية الخاصة بهم.\",
    \"mvp_plan\": \"تطوير خدمة بسيطة ترصد العقود الذكية وتستخدم خوارزميات تعلم الآلة لتحليل التغييرات في الكود، مع إرسال تنبيهات عبر البريد الإلكتروني أو الرسائل النصية عند اكتشاف ثغرات.\"
  }
]
```",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}