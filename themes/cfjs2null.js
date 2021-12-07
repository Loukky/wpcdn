history.replaceState && history.replaceState(
  null, '', location.pathname + location.search.replace(/[\?&](__cf_chl_jschl_tk__|__cf_chl_captcha_tk__|__cf_chl_managed_tk__|__cf_chl_rt_tk|__cf_chl_tk)=[^&]+/, '').replace(/^&/, '?')
);
