// MONEYMAX v16.8.2 - Cloudflare Worker + Static Assets
// API handlers are adapted from the previous Pages Functions version.

const branches = [
  {
    "name": "머니박스 강남",
    "area": "강남",
    "origin": "http://moneyboxgn.com",
    "referer": "http://moneyboxgn.com/",
    "apiCode": "gangnam-stn"
  },
  {
    "name": "머니박스 성수",
    "area": "성수",
    "origin": "https://moneyboxseongsu.com",
    "referer": "https://moneyboxseongsu.com/",
    "apiCode": "seongsu-stn"
  },
  {
    "name": "머니박스 홍대",
    "area": "홍대",
    "origin": "http://www.moneyboxhd.com",
    "referer": "http://www.moneyboxhd.com/",
    "apiCode": "hongdae"
  },
  {
    "name": "머니박스 명동",
    "area": "명동",
    "origin": "http://www.moneyboxmd.com",
    "referer": "http://www.moneyboxmd.com/",
    "apiCode": "myeongdong-main"
  },
  {
    "name": "머니박스 인사동",
    "area": "인사동",
    "origin": "http://www.moneyboxis.com",
    "referer": "http://www.moneyboxis.com/",
    "apiCode": "insadong"
  },
  {
    "name": "머니박스 남대문",
    "area": "남대문",
    "origin": "http://www.moneyboxndm.com",
    "referer": "http://www.moneyboxndm.com/",
    "apiCode": "namdaemun"
  },
  {
    "name": "머니박스 명동2",
    "area": "명동2",
    "origin": "http://www.moneyboxmd2.com",
    "referer": "http://www.moneyboxmd2.com/",
    "apiCode": "myeongdong-2"
  },
  {
    "name": "머니박스 충무로",
    "area": "충무로",
    "origin": "https://moneyboxcmr.com",
    "referer": "https://moneyboxcmr.com/",
    "apiCode": "chungmuro"
  },
  {
    "name": "머니박스 동대문",
    "area": "동대문",
    "origin": "http://www.moneyboxddm.com",
    "referer": "http://www.moneyboxddm.com/",
    "apiCode": "dongdaemun"
  },
  {
    "name": "머니박스 서울역",
    "area": "서울역",
    "origin": "http://www.moneyboxsst.com",
    "referer": "http://www.moneyboxsst.com/"
  },
  {
    "name": "머니박스 부산역",
    "area": "부산역",
    "origin": "http://www.moneyboxbst.com",
    "referer": "http://www.moneyboxbst.com/",
    "apiCode": "busan-stn"
  },
  {
    "name": "머니박스 강남신사",
    "area": "강남신사",
    "origin": "https://moneyboxsinsa.com",
    "referer": "https://moneyboxsinsa.com/",
    "apiCode": "sinsa-gangnam"
  },
  {
    "name": "머니박스 여의도",
    "area": "여의도",
    "origin": "https://moneyboxyud.com",
    "referer": "https://moneyboxyud.com/",
    "apiCode": "yeouido"
  },
  {
    "name": "머니박스 광장시장",
    "area": "광장시장",
    "origin": "https://moneyboxkjm.com",
    "referer": "https://moneyboxkjm.com/",
    "apiCode": "gwangjang-market"
  },
  {
    "name": "머니박스 연남",
    "area": "연남",
    "origin": "https://moneyboxynd.com",
    "referer": "https://moneyboxynd.com/",
    "apiCode": "yeonnam"
  },
  {
    "name": "머니박스 이태원",
    "area": "이태원",
    "origin": "http://moneyboxitw.com",
    "referer": "http://moneyboxitw.com/",
    "apiCode": "itaewon"
  },
  {
    "name": "머니박스 부평",
    "area": "부평",
    "origin": "http://moneyboxbp.com",
    "referer": "http://moneyboxbp.com/",
    "apiCode": "bupyeong"
  },
  {
    "name": "머니박스 대구",
    "area": "대구",
    "origin": "http://moneyboxdg.com",
    "referer": "http://moneyboxdg.com/"
  },
  {
    "name": "머니박스 제주",
    "area": "제주",
    "origin": "http://www.moneyboxjeju.com",
    "referer": "http://www.moneyboxjeju.com/"
  },
  {
    "name": "머니박스 제주동문",
    "area": "제주동문",
    "origin": "https://www.moneyboxjjdm.com",
    "referer": "https://www.moneyboxjjdm.com/"
  },
  {
    "name": "머니박스 수원",
    "area": "수원",
    "origin": "https://www.moneyboxsw.com",
    "referer": "https://www.moneyboxsw.com/",
    "apiCode": "suwon"
  },
  {
    "name": "머니박스 마포",
    "area": "마포",
    "origin": "http://www.moneyboxmp.com",
    "referer": "http://www.moneyboxmp.com/",
    "apiCode": "mapo"
  },
  {
    "name": "머니박스 송도",
    "area": "송도",
    "origin": "https://www.moneyboxsd.com",
    "referer": "https://www.moneyboxsd.com/",
    "apiCode": "songdo"
  },
  {
    "name": "머니박스 용산",
    "area": "용산",
    "origin": "https://m-box.com",
    "referer": "https://m-box.com/branch/YS1",
    "mboxPage": "https://m-box.com/branch/YS1",
    "apiCode": "seoul-dragon-city"
  },
  {
    "name": "머니박스 울산",
    "area": "울산",
    "origin": "http://www.moneyboxulsan.com",
    "referer": "http://www.moneyboxulsan.com/"
  },
  {
    "name": "머니박스 안양",
    "area": "안양",
    "origin": "https://m-box.com",
    "referer": "https://m-box.com/",
    "apiCode": "anyang-beomgye-stn"
  },
  {
    "name": "머니박스 안국",
    "area": "안국",
    "origin": "https://m-box.com",
    "referer": "https://m-box.com/",
    "apiCode": "anguk-stn"
  }
];


const TARGET = [
  "USD","JPY","CNY","TWD","HKD","EUR","AUD",
  "SGD","CAD","GBP","THB","PHP","MYR","VND","IDR","CHF","NZD","AED","RUB"
];

const API_URL = "https://cems.moneybox.or.kr/api/moneybox.php";
const MBOX_ASSET_API = "https://user-api.m-box.com/api/user/assets";
const MBOX_BASE_API = "https://user-api.m-box.com/api/user/currencies/base-rates";

function num(v) {
  if (v === null || v === undefined) return null;
  const n = Number(String(v).replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : null;
}

function stripTags(s) {
  return String(s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}


function normalizeCurrencyUnit(currency, value) {
  if (value === null || value === undefined) return null;
  let n = Number(value);
  if (!Number.isFinite(n)) return null;
  if (["JPY", "VND", "IDR"].includes(currency) && n > 0 && n < 100) n = n * 100;
  return n;
}

function parseMboxBranchText(text, branch) {
  const body = String(text || "").replace(/\s+/g, " ").trim();
  const data = [];
  const dateMatch = body.match(/실시간\s*환율\s*(.*?)\s*기준/);
  const dateText = dateMatch ? dateMatch[1].trim() : new Date().toISOString().slice(0, 10);

  for (const currency of TARGET) {
    const re = new RegExp(`${currency}\\s*\\(${currency}\\)\\s*([0-9][0-9,]*(?:\\.[0-9]+)?)`, "i");
    const m = body.match(re);
    if (!m) continue;

    const buy = normalizeCurrencyUnit(currency, num(m[1]));
    if (buy == null || buy <= 0) continue;

    data.push({
      branch: branch.name,
      area: branch.area,
      currency,
      buy,
      sell: null,
      base: null,
      spread: null,
      buyDiff: null,
      sellDiff: null,
      date: dateText,
      source: branch.mboxPage,
      type: "moneybox-mbox"
    });
  }

  return data;
}

async function getMboxBranch(branch) {
  const response = await fetch(branch.mboxPage, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
    }
  });
  const html = await response.text();
  const rows = parseMboxBranchText(stripTags(html), branch);
  if (!rows.length) throw new Error("M-BOX 지점 페이지 파싱 실패");
  return rows;
}

async function HTTP_GET_JSON(url, headers) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
}


async function getNewMboxBranch(branch) {
  if (!branch.apiCode) throw new Error("새 M-BOX API 코드 없음");
  const url = `${MBOX_ASSET_API}/${encodeURIComponent(branch.apiCode)}`;

  const requestHeaders = {
    "Accept": "application/json, text/plain, */*",
    "Origin": "https://m-box.com",
    "Referer": "https://m-box.com/",
    "User-Agent": "Mozilla/5.0"
  };

  const assetResponse = await HTTP_GET_JSON(url, requestHeaders);
  const asset = assetResponse?.data;
  if (!asset || !Array.isArray(asset.exchangeRates)) throw new Error("새 M-BOX 지점 API 데이터 형식 오류");

  // base-rates는 공통 기준율이다. 실패해도 지점 매입/매각 데이터는 계속 사용한다.
  let baseMap = {};
  try {
    const baseResponse = await HTTP_GET_JSON(MBOX_BASE_API, requestHeaders);
    const baseRows = Array.isArray(baseResponse?.data) ? baseResponse.data : [];
    baseMap = Object.fromEntries(baseRows.map(r => [r.currencyCode, normalizeCurrencyUnit(r.currencyCode, num(r.baseRate))]));
  } catch (_) {}

  const now = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  return asset.exchangeRates
    .filter(r => TARGET.includes(r.currencyCode))
    .map(r => {
      const currency = r.currencyCode;
      // 새 API의 buyRate/sellRate는 '지점 기준'이다.
      // MoneyMax는 고객 기준이므로: 살 때 = 지점 sellRate, 팔 때 = 지점 buyRate.
      let buy = normalizeCurrencyUnit(currency, num(r.sellRate));
      let sell = normalizeCurrencyUnit(currency, num(r.buyRate));
      const base = baseMap[currency] ?? null;

      // 지점이 판매 제외면 고객은 살 수 없고, 매입 제외면 고객은 팔 수 없다.
      if (r.excludedFromSale === true) buy = null;
      if (r.excludedFromPurchase === true) sell = null;

      // 0/음수/비정상 숫자는 이전 값 유지 없이 즉시 미등록 처리한다.
      if (!Number.isFinite(buy) || buy <= 0) buy = null;
      if (!Number.isFinite(sell) || sell <= 0) sell = null;

      return {
        branch: branch.name, area: branch.area, currency,
        buy, sell, base,
        blocked: buy == null && sell == null,
        status: buy == null && sell == null ? "미등록" : "정상",
        spread: buy != null && sell != null ? buy - sell : null,
        buyDiff: buy != null && base != null ? buy - base : null,
        sellDiff: sell != null && base != null ? sell - base : null,
        date: now,
        source: url,
        type: "moneybox-api"
      };
    });
}

async function getBranchSafe(branch) {
  // 본사에서 새 사이트로 전환한 지점만 새 JSON API를 사용한다.
  // 아직 전환되지 않은 지점은 기존 CEMS 수집 방식을 그대로 유지한다.
  if (branch.apiCode) return getNewMboxBranch(branch);
  return getBranch(branch);
}

async function getBranch(branch) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: "cmd=C010",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Origin": branch.origin,
      "Referer": branch.referer,
      "User-Agent": "Mozilla/5.0"
    }
  });

  const raw = await response.text();
  let payload;
  try {
    payload = JSON.parse(raw);
  } catch (e) {
    throw new Error("JSON 파싱 실패");
  }

  if (!payload || !Array.isArray(payload.data)) {
    throw new Error("데이터 형식 오류");
  }

  return payload.data
    .filter(x => TARGET.includes(x.crc))
    .map(x => {
      const buy = normalizeCurrencyUnit(x.crc, num(x.buy));
      const sell = normalizeCurrencyUnit(x.crc, num(x.sell));
      const base = normalizeCurrencyUnit(x.crc, num(x.base || x.bas));
      return {
        branch: branch.name,
        area: branch.area,
        currency: x.crc,
        buy,
        sell,
        base,
        spread: buy && sell ? buy - sell : null,
        buyDiff: buy && base ? buy - base : null,
        sellDiff: sell && base ? sell - base : null,
        date: payload.dt ? payload.dt[0] : "-",
        source: branch.referer,
        type: "moneybox"
      };
    });
}

async function getJeil() {
  const url = "http://jeilexchange.com/";
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
    }
  });

  const html = await response.text();
  const dateMatch = html.match(/<span class="title_right">([\s\S]*?)<\/span>/);
  const dateText = dateMatch ? stripTags(dateMatch[1]) : new Date().toISOString().slice(0, 10);

  const rows = [...html.matchAll(/<tr class="table_line">([\s\S]*?)<\/tr>/g)];
  const data = [];

  for (const row of rows) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m => stripTags(m[1]));
    const currency = cells[2];
    let buy = num(cells[3]);
    let sell = num(cells[4]);

    if (!TARGET.includes(currency) || buy === null || sell === null) continue;

    data.push({
      branch: "제일환전",
      area: "명동",
      currency,
      buy,
      sell,
      base: null,
      spread: buy - sell,
      buyDiff: null,
      sellDiff: null,
      date: dateText,
      source: url,
      type: "external"
    });
  }

  if (!data.length) throw new Error("제일환전 데이터 파싱 실패");
  return data;
}

async function handleRatesGet() {
  const jobs = [
    ...branches.map(branch => ({
      name: branch.name,
      promise: getBranchSafe(branch)
    })),
    {
      name: "제일환전",
      promise: getJeil()
    }
  ];

  const results = await Promise.allSettled(jobs.map(job => job.promise));
  const data = [];
  const errors = [];
  const branchStatus = [];
  const updatedAt = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

  results.forEach((r, i) => {
    const job = jobs[i];
    const branch = branches.find(b => b.name === job.name);
    const mode = job.name === "제일환전" ? "EXTERNAL" : (branch?.apiCode ? "NEW_API" : "LEGACY");
    const apiCode = branch?.apiCode || null;
    const area = branch?.area || (job.name === "제일환전" ? "명동" : "");

    if (r.status === "fulfilled") {
      const rows = Array.isArray(r.value) ? r.value : [];
      data.push(...rows);
      branchStatus.push({
        name: job.name, area, mode, apiCode,
        ok: rows.length > 0,
        status: rows.length > 0 ? "정상" : "데이터 없음",
        rowCount: rows.length,
        updatedAt,
        error: null
      });
    } else {
      const message = r.reason?.message || String(r.reason);
      errors.push(job.name + ": " + message);
      branchStatus.push({
        name: job.name, area, mode, apiCode,
        ok: false,
        status: "수집 실패",
        rowCount: 0,
        updatedAt,
        error: message
      });
    }
  });

  return Response.json({
    success: data.length > 0,
    updatedAt,
    currencies: TARGET,
    branchCount: jobs.length,
    data,
    errors,
    branchStatus
  });
}


async function yahoo(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1d&interval=5m`;
  const r = await fetch(url, { headers: {"User-Agent":"Mozilla/5.0"} });
  const data = await r.json();
  const result = data?.chart?.result?.[0];
  const meta = result?.meta || {};
  const price = meta.regularMarketPrice || meta.previousClose || null;
  const prev = meta.chartPreviousClose || meta.previousClose || null;
  const changePct = price && prev ? ((price - prev) / prev * 100) : null;
  return { price, changePct };
}

async function handleMarketsGet() {
  const errors = [];
  async function safe(name, fn) {
    try { return await fn(); } catch(e) { errors.push(name + ": " + e.message); return null; }
  }

  const usdjpy = await safe("USDJPY", () => yahoo("JPY=X"));
  const wti = await safe("WTI", () => yahoo("CL=F"));
  const dxy = await safe("DXY", () => yahoo("DX-Y.NYB"));

  const upbit = await safe("Upbit BTC", async () => {
    const r = await fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC");
    const data = await r.json();
    return data?.[0]?.trade_price || null;
  });

  const binance = await safe("Binance BTC", async () => {
    const r = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
    const data = await r.json();
    return Number(data?.price) || null;
  });

  const usdkrw = await safe("USDKRW", async () => {
    const y = await yahoo("KRW=X");
    return y?.price || null;
  });

  let kimchi = null;
  if (upbit && binance && usdkrw) {
    const globalKrw = binance * usdkrw;
    const premium = (upbit - globalKrw) / globalKrw * 100;
    kimchi = { premium, diff: upbit - globalKrw, upbit, binance, usdkrw, globalKrw };
  }

  return Response.json({
    success: true,
    updatedAt: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    indicators: { usdjpy, wti, dxy, kimchi },
    errors
  });
}


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const context = {
      request,
      env,
      params: {},
      data: {},
      waitUntil: ctx.waitUntil.bind(ctx),
      passThroughOnException: ctx.passThroughOnException?.bind(ctx)
    };

    if (url.pathname === "/api/rates") {
      return handleRates(context);
    }
    if (url.pathname === "/api/markets") {
      return handleMarkets(context);
    }

    // Static files normally bypass the Worker because run_worker_first only
    // targets /api/*. This fallback is kept for safety.
    return env.ASSETS.fetch(request);
  }
};
