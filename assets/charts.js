(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Free Quota Comparison ---
  var chartEl = document.getElementById('chart-free-tokens');
  if (!chartEl) return;

  var chart = echarts.init(chartEl, null, { renderer: 'svg' });

  var platforms = [
    '智谱 AI', '商汤 SenseNova', '硅基流动', 'DeepSeek', '阿里云百炼',
    '火山引擎', '百度千帆', 'Kimi', '腾讯混元', '讯飞星火', 'MiniMax',
    '京东 JoyClaw', '零一万物', '昆仑万维天工', '华为云盘古'
  ];

  // 免费额度规模评分（1-5，综合考量额度大小、刷新机制、持续性）
  var quotaScore = [5, 4, 4, 2, 3, 3, 3, 1, 3, 2, 2, 2, 2, 2, 2];

  // 永久免费模型数
  var permanentFreeModels = [3, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  chart.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      formatter: function(params) {
        var name = params[0].name;
        var scoreVal = params[0].value;
        var freeVal = params[1].value;
        var html = '<strong>' + name + '</strong><br/>';
        html += '免费额度评分: ' + scoreVal + '/5<br/>';
        html += '永久免费模型数: ' + freeVal + ' 个';
        return html;
      }
    },
    legend: {
      data: ['免费额度规模评分（1-5）', '永久免费模型数'],
      top: 0,
      textStyle: { color: muted, fontSize: 12 }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      top: 50,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      max: 5.5
    },
    yAxis: {
      type: 'category',
      data: platforms,
      inverse: true,
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [
      {
        name: '免费额度规模评分（1-5）',
        type: 'bar',
        data: quotaScore,
        itemStyle: {
          color: accent,
          borderRadius: [0, 4, 4, 0]
        },
        barWidth: 12,
        label: {
          show: true,
          position: 'right',
          formatter: '{c}/5',
          color: muted,
          fontSize: 10
        }
      },
      {
        name: '永久免费模型数',
        type: 'bar',
        data: permanentFreeModels,
        itemStyle: {
          color: accent2,
          borderRadius: [0, 4, 4, 0]
        },
        barWidth: 12,
        label: {
          show: true,
          position: 'right',
          formatter: '{c} 个',
          color: muted,
          fontSize: 10
        }
      }
    ]
  });

  window.addEventListener('resize', function() { chart.resize(); });
})();
