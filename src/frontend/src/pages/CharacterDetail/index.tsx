import { useNavigate, useParams } from "react-router-dom";
import LeftPanelNftDetail from "./LeftPanelNftDetail";
import RightPanelNftDetail from "./RightPanelNftDetail";
import { useEffect } from "react";
import { Button } from "@charm/components/ui/Button";

type Params = {
  tokenId: string;
};

export default function CharacterDetailPage() {
  const navigate = useNavigate();
  const params = useParams<Params>();
  const tokenId = Number(params.tokenId);

  useEffect(() => {
    if (Number.isNaN(tokenId)) {
      navigate("/404");
    }
  }, [tokenId, navigate]);

  return (
    <section className="mx-auto max-w-[1440px] px-12 ">
      <div className="pt-6 pb-2">
        <Button
          className="px-4 py-2 rounded transition text-sm font-medium"
          variant="ghost"
          onClick={() =>
            window.history.length > 1
              ? window.history.back()
              : window.location.assign("/explore")
          }
        >
          ← Back to Explore
        </Button>
      </div>
      <div className="flex gap-2 border-b border-opacityColor-6 py-12">
        <div className="w-[calc(100%/3-8px/3)]">
          <LeftPanelNftDetail tokenId={tokenId} />
        </div>
        <div className="flex-1">
          <RightPanelNftDetail tokenId={tokenId} />
        </div>
      </div>
    </section>
  );
}
