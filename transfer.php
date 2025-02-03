<?php
// 强制设置响应头为 JSON 格式
header('Content-Type: application/json');

// 固定参数配置
$config = [
    'member_id' => '1199012',
    'external' => '',
    'source' => 'batch',
    'product' => 'true',
    'target_url' => 'http://page.tangguobaohe.com/backend/weixin/transfer'
];

// 自动处理请求内容
$content = isset($_POST['content']) ? $_POST['content'] : file_get_contents('php://input');

// 构建强制请求头 (包含必须的 Content-Type)
$headers = [
    'Host: page.tangguobaohe.com',
    'Content-Type: application/x-www-form-urlencoded', // 强制封装的核心配置
    'X-PLATFORM: android',
    'X-AGENT: JellyBox/8.8.8 (Android, F888, 10)',
    'Referer: http://page.tangguobaohe.com/share/chainurl',
    'X-APPID: 2407255655'
];

// 构造完整请求URL
$query_string = http_build_query([
    'member_id' => $config['member_id'],
    'external' => $config['external'],
    'source' => $config['source'],
    'product' => $config['product']
]);

// 初始化 cURL
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $config['target_url'] . '?' . $query_string,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query(['content' => $content]), // 自动编码
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_SSL_VERIFYPEER => false // 仅测试环境使用
]);

// 执行请求
$response = curl_exec($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// 错误处理
if(curl_errno($ch) || $status_code != 200) {
    echo json_encode([
        'status' => 'error',
        'code' => $status_code ?: 500,
        'message' => curl_error($ch) ?: 'Upstream service error'
    ]);
    exit;
}

// 关闭连接
curl_close($ch);

// 直接透传响应
echo $response;