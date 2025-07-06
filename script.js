document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('copyForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    result.innerHTML = '<div class="loading fade-in">⏳ جاري تجهيز إعدادات النسخ...</div>';

    const sourceServer = document.getElementById('sourceServer').value.trim();
    const targetServer = document.getElementById('targetServer').value.trim();

    const copyRoles = document.getElementById('roles').checked;
    const copyChannels = document.getElementById('channels').checked;
    const copyEmojis = document.getElementById('emojis').checked;
    const copyEverything = document.getElementById('everything').checked;

    const config = {
      sourceServer,
      targetServer,
      options: {
        roles: copyRoles,
        channels: copyChannels,
        emojis: copyEmojis,
        everything: copyEverything
      }
    };

    console.log(\"✅ Config to copy:\", config);

    setTimeout(() => {
      result.innerHTML = '<div class=\"success fade-in\">✅ تم تجهيز عملية النسخ بنجاح! اطلع على الكونسول للتفاصيل.</div>';
    }, 2000);
  });
});
