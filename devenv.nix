{ pkgs, _lib, config, _inputs, ... }:
let 
  ZROK_URL = "https://${config.env.ZROK_RESERVED_NAME}.share.zrok.io";
in
{
  languages = {
    javascript = {
      enable = true;
      pnpm.enable = true;
    };
  };

  packages = [ 
    pkgs.git
    pkgs.zrok
    pkgs.qrencode
   ];

  dotenv = {
    # dotenv files leak into the nix store!
    # FIXME: update to secretspec
    enable = true;
    filename = [ ".env" ".env.local" ];
  };

  tasks = {
    "local:server" = {
      exec = "pnpm run dev --port ${config.env.LOCAL_PORT}";
    };

    "zrok:server" = {
      exec = "NEXTAUTH_URL=${ZROK_URL} pnpm run dev --port ${config.env.ZROK_PORT}";
    };


    "zrok:tunnel" = {
      exec = "zrok share reserved ${config.env.ZROK_RESERVED_NAME} --headless";
    };
  };

  scripts = 
  let 
    chakra-component-path = "./src/packages/ui-components/chakra";
  in
    {
    chakra.exec = ''${pkgs.pnpm}/bin/pnpm dlx @chakra-ui/cli "$@" --outdir ${chakra-component-path}'';
    qr.exec = "qrencode -t ansiutf8 -o - '${ZROK_URL}'";
    uri.exec = "echo '${ZROK_URL}'";
    lserver.exec = "NEXTAUTH_URL=${ZROK_URL} pnpm run dev --port ${config.env.ZROK_PORT}";
    server.exec = "NEXTAUTH_URL=${ZROK_URL} pnpm run dev --port ${config.env.ZROK_PORT}";
    tunnel.exec = "zrok share reserved ${config.env.ZROK_RESERVED_NAME} --headless";
  };
}
