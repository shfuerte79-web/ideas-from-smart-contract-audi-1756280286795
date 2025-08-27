export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Smart Contract Auditor AI
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}