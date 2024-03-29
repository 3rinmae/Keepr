




namespace Keepr.Repositories;

public class VaultKeepsRepository
{
  private readonly IDbConnection _db;

  public VaultKeepsRepository(IDbConnection db)
  {
    _db = db;
  }

  internal VaultKeep CreateVaultKeep(VaultKeep vaultKeepData)
  {
    string sql = @"
      INSERT INTO
      vaultKeeps(creatorId, vaultId, keepId)
      VALUES(@CreatorId, @VaultId, @KeepId);
      
      SELECT
      vk.*,
      acc.*
      FROM vaultKeeps vk
      JOIN accounts acc ON acc.id = vk.creatorId
      WHERE vk.id = LAST_INSERT_ID();";
    VaultKeep vaultKeep = _db.Query<VaultKeep, Profile, VaultKeep>(sql, (vaultKeep, profile) =>
    {
      vaultKeep.CreatorId = profile.Id;
      return vaultKeep;
    }, vaultKeepData).FirstOrDefault();
    return vaultKeep;
  }

  internal void DestroyVaultKeep(int vaultKeepId)
  {
    string sql = "DELETE FROM vaultKeeps WHERE id = @vaultKeepId LIMIT 1;";
    _db.Execute(sql, new { vaultKeepId });
  }

  internal VaultKeep GetVaultKeepById(int vaultKeepId)
  {
    string sql = "SELECT * FROM vaultKeeps WHERE id = @vaultKeepId;";
    VaultKeep vaultKeep = _db.Query<VaultKeep>(sql, new { vaultKeepId }).FirstOrDefault();
    return vaultKeep;
  }
}