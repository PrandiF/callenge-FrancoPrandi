import React from "react";

type MiniCardProps = {
  tipo: string;
};

function MiniCard({ tipo }: MiniCardProps) {
  return (
    <div>
      {tipo == "feat" ? (
        <div className="bg-verde px-2 py-1 rounded-xl">
          <p className="text-verde2 text-[10px] font-bold">Feat</p>
        </div>
      ) : tipo == "fix" ? (
        <div className="bg-amarillo px-2 py-1 rounded-xl">
          <p className="text-amarillo2 text-[10px] font-bold">Fix</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MiniCard;
