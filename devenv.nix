{ pkgs, lib, config, inputs, ... }:

{
  languages = {
    javascript = {
      enable = true;
      pnpm.enable = true;
    };

  };

  packages = [ pkgs.git ];

  scripts = 
  let 
    chakra-component-path = "./src/packages/ui-components/chakra";
  in
    {
    chakra.exec = ''${pkgs.pnpm}/bin/pnpm dlx @chakra-ui/cli "$@" --outdir ${chakra-component-path}'';
  };
}
